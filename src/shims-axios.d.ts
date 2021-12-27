import * as axios from 'axios'
declare module 'axios' {
  export interface ResData<T> {
    code: number;
    msg?: string;
    message?: string;
    data?: T;
    [keys: string]: any;
  }
}
