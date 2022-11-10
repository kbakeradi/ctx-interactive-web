import { ChangeEvent } from 'react'

export interface IscModel {
  gain: number
  part: string
  snr: number
  nimbleProjectLink: string
}

export interface IscRange {
  ranges: IscRangeItem[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IscRangeItem {
  name: string
  value: number
}

export interface IscRangeState {
  inputSignalRange: IscRangeItem[]
  bandwidth: IscRangeItem[]
  resolution: IscRangeItem[]
}

export interface IscActiveRanges {
  inputSignalRange: string
  bandwidth: string
  resolution: string
}

export interface IscActiveRangeScenarios {
  [key: string]: IscActiveRanges
}

export interface IscPictogramScenarios {
  [key: string]: any
}
