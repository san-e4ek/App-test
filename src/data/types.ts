import { Status, Type } from ".";


export interface ISite {
  id: number;
  url: string;
}

export interface ITest {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export interface IData extends ITest {
  url: string
}

