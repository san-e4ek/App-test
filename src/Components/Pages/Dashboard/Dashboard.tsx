import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'

import { RequestsUrls, IData, SortMarkers, SortTypes } from '../../../data'
import { arrayMaper, sorterStatus } from './utils'

import { Table } from '../../'

import './styles.scss'

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<IData[]>([])
  const [findItems, setFindItems] = useState<IData[] | null>(null)
  const [isNoResults, setisNoResults] = useState<boolean>(false)
  const [sortMethods, setSortMethods] = useState<{
    [key: string]: SortMarkers.ASK | SortMarkers.DESK
  }>({
    name: SortMarkers.ASK,
    type: SortMarkers.ASK,
    status: SortMarkers.ASK,
    site: SortMarkers.ASK,
  })
  const searchInput = useRef<HTMLInputElement>(null)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    value === '' && resetPage()
  }
  const onResult = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const value = searchInput.current!.value.toLowerCase()
      const findItems = data.filter(({ name }) =>
        name.trim().toLowerCase().includes(value)
      )

      if (Boolean(findItems.length)) {
        setFindItems(findItems)
        setisNoResults(false)
      } else setisNoResults(true)
    }
  }

  const onSort = useCallback(
    (e: React.SyntheticEvent) => {
      const sortType = (e.target as HTMLElement).dataset.type
      const sortsCompares: { [key: string]: (a: IData, b: IData) => number } = {
        name: (a, b) => {
          if (sortMethods.name === SortMarkers.ASK) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return +1
            else return 0
          } else {
            if (a.name > b.name) return -1
            if (a.name < b.name) return +1
            else return 0
          }
        },
        type: (a, b) => {
          if (sortMethods.type === SortMarkers.ASK) {
            if (a.type < b.type) return -1
            if (a.type > b.type) return +1
            else return 0
          } else {
            if (a.type > b.type) return -1
            if (a.type < b.type) return +1
            else return 0
          }
        },
        site: (a, b) => {
          if (sortMethods.site === SortMarkers.ASK) {
            if (a.url < b.url) return -1
            if (a.url > b.url) return +1
            else return 0
          } else {
            if (a.url > b.url) return -1
            if (a.url < b.url) return +1
            else return 0
          }
        },
      }

      if (sortType) {
        const curSortMethods =
          sortMethods[sortType] === SortMarkers.ASK
            ? SortMarkers.DESK
            : SortMarkers.ASK
        setSortMethods({ ...sortMethods, [sortType]: curSortMethods })
        sortType !== SortTypes.STATUS
          ? setData(data.sort(sortsCompares[sortType]))
          : setData(sorterStatus(data, curSortMethods))
      }
    },
    [data, sortMethods]
  )

  const onReset = () => {
    searchInput.current!.value = ''
    resetPage()
  }

  const resetPage = () => {
    setisNoResults(false)
    setFindItems(null)
  }

  const filtredData = useMemo(() => (findItems !== null ? findItems : data), [
    findItems,
    data,
  ])

  useEffect(() => {
    axios
      .all([
        axios.get(RequestsUrls.TESTS_REQUEST_URL),
        axios.get(RequestsUrls.SITES_REQUEST_URL),
      ])
      .then(arrayMaper)
      .then((data) => setData(data))
      .catch(console.log)
  }, [])

  return (
    <div className='dashboard'>
      <div className='wrapper'>
        <h1 className='dashboard__title'>Dashboard</h1>
        <div className='dashboard__search-wrapper flex-between'>
          <div className='dashboard__search-icon' />
          <input
            type='text'
            placeholder='What test are you looking for?'
            className='dashboard__search-input'
            onKeyPress={onResult}
            onChange={onSearch}
            ref={searchInput}
            tabIndex={0}
          />
          <div className='dashboard__search-result'>{data.length} tests</div>
        </div>

        {isNoResults ? (
          <div className='dashboard__no-results flex-column'>
            <p className='dashboard__no-results-message'>
              Your search did not match any results
            </p>
            <button
              className='button button--reset flex-center'
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        ) : (
          <Table data={filtredData} onSort={onSort} sortMethods={sortMethods} />
        )}
      </div>
    </div>
  )
}
