export enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

export enum SortMarkers {
  ASK = 'ASK',
  DESK = 'DESK',
}

export enum SortTypes {
NAME = 'name',
TYPE = 'type',
STATUS = 'status',
SITE = 'site'
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export enum TypeButttons {
  FINALIZE = 'Finalize',
  RESULTS = 'Results'
}

export enum Paths {
  DASHBOARD = '/',
  FINALIZE = '/finalize',
  RESULTS = '/results'
}

export enum RequestsUrls {
  BASE_URL = 'http://localhost:3100/',
  SITES_REQUEST_URL = 'http://localhost:3100/sites',
  TESTS_REQUEST_URL = 'http://localhost:3100/tests'
}


export const links = {
  'Finalize': Paths.FINALIZE,
  'Results': Paths.RESULTS
}

export const borderColors = [
  {
    borderColor: '#E14165'
  },
  {
    borderColor: '#8686FF'
  },
  {
    borderColor: '#C2C2FF'
  },
]
