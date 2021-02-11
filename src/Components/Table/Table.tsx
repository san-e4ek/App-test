import React from 'react'
import { Link } from 'react-router-dom'

import { textFormatter, getTypeButton, getCleanUrl, randomizer } from './utils'

import { IData, borderColors, links, SortMarkers, SortTypes } from '../../data'

import './styles.scss'

interface ITable {
  data: IData[]
  onSort: (e: React.SyntheticEvent<HTMLElement>) => void
  sortMethods: { [key: string]: SortMarkers.ASK | SortMarkers.DESK }
}

export const Table: React.FC<ITable> = ({ data, onSort, sortMethods }) => (
  <div className='table'>
    <div className='table__row table__row--header' onClick={onSort}>
      <div className='table__col table__col--header' data-type={SortTypes.NAME}>
        Name
        <span
          className={`table__sort-arrow table__sort-arrow--${
            sortMethods[SortTypes.NAME]
          }`}
        />
      </div>
      <div className='table__col table__col--header' data-type={SortTypes.TYPE}>
        Type
        <span
          className={`table__sort-arrow table__sort-arrow--${
            sortMethods[SortTypes.TYPE]
          }`}
        />
      </div>
      <div
        className='table__col table__col--header'
        data-type={SortTypes.STATUS}
      >
        Status
        <span
          className={`table__sort-arrow table__sort-arrow--${
            sortMethods[SortTypes.STATUS]
          }`}
        />
      </div>
      <div className='table__col table__col--header' data-type={SortTypes.SITE}>
        Site
        <span
          className={`table__sort-arrow table__sort-arrow--${
            sortMethods[SortTypes.SITE]
          }`}
        />
      </div>
      <div className='table__col table__col--header' />
    </div>

    {data.map(({ id, name, type, status, url }) => {
      const typeButton = getTypeButton(status)
      const correctType = textFormatter(type)
      const correctStatus = textFormatter(status)
      const cleanUrl = getCleanUrl(url)
      return (
        <div
          className='table__row'
          style={borderColors.sort(randomizer)[0]}
          key={id}
          tabIndex={id}
        >
          <div className='table__col table__col--name'>{name}</div>
          <div className='table__col table__col--type'>{correctType}</div>
          <div
            className={`table__col table__col--status table__col--${correctStatus}`}
          >
            {correctStatus}
          </div>
          <div className='table__col table__col--site'>{cleanUrl}</div>
          <div className='table__col table__col--button'>
            <Link to={`${links[typeButton]}/?id=${id}`}>
              <button className={`button flex-center button--${typeButton}`}>
                {typeButton}
              </button>
            </Link>
          </div>
        </div>
      )
    })}
  </div>
)
