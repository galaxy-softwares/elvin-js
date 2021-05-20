import { HTTPTYPE } from '../shared'

export interface IAnyObject {
  [key: string]: any
}

export interface ResourceErrorTarget {
  src?: string
  href?: string
  localName?: string
}

export interface REPORTHttp {
  type: HTTPTYPE
  traceId?: string
  method?: string
  url?: string
  status?: number
  reqData?: any
  // statusText?: string
  sTime?: number
  elapsedTime?: number
  responseText?: any
  time?: number
  isSdkUrl?: boolean
  // for wx
  errMsg?: string
}

export interface REPORTXMLHttpRequest extends XMLHttpRequest {
  [key: string]: any
  report_xhr?: REPORTHttp | any
  before_report_xhr: any
}

export interface ErrorStack {
  args: any[]
  func: string
  column: number
  line: number
  url: string
}

export interface IntegrationError {
  message: string
  name: string
  stacks: ErrorStack[]
}

export type TNumStrObj = number | string | object
