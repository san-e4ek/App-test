import { IData, SortMarkers, Status } from "../../../data"
import { AxiosResponse } from 'axios';

export const arrayMaper = (response: AxiosResponse[]) => 
  response.reduce((acc: IData[], { data }: AxiosResponse) => {
    data.forEach((item: IData) => {
      if (item.url)
        acc.forEach((newItem: IData) => {
          if (newItem.siteId === item.id) newItem['url'] = item.url
        })
      else acc.push(item)
    })
    return acc
}, [])

export const sorterStatus = (data: IData[], sortFlag: SortMarkers.ASK | SortMarkers.DESK) => {
  const box: {[key: string]: IData[]} = {
    [Status.ONLINE]: [],
    [Status.PAUSED]: [],
    [Status.STOPPED]: [],
    [Status.DRAFT]: [],
  }

  data.forEach((dataItem: IData) => {
    box[dataItem.status].push(dataItem)
  })

  const sortedArray = [...box.ONLINE, ...box.PAUSED, ...box.STOPPED, ...box.DRAFT]
  
  return sortFlag === SortMarkers.ASK ? sortedArray : sortedArray.reverse() 
}