export * from './okx'
export * from './market'

export interface IResData<T> {
  code: string
  msg: string
  data: T[]
}
