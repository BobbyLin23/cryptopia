import { Time } from 'lightweight-charts'

export interface IKlineRes {
  time: Time
  open: number
  high: number
  low: number
  close: number
  value: number
}
