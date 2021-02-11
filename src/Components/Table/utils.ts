import { Status, TypeButttons } from "../../data"

export const getTypeButton = (status: string) => 
  status === Status.DRAFT 
    ? TypeButttons.FINALIZE 
    : TypeButttons.RESULTS
 
export const textFormatter = (str: string) => 
  str.split('')
     .map((letter, index) => 
      index > 0 && str.length > 3 
        ? letter.toLowerCase() 
        : letter
        ).join('')

export const getCleanUrl = (url: string) => 
  url.split('//')[1]
     .split('.')
     .filter((prefix) => prefix !== 'www')
     .join('.')

export const randomizer = () => Math.random() - 0.5