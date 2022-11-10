import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react'
import {
  IscActiveRanges,
  IscActiveRangeScenarios,
  IscPictogramScenarios,
  IscRangeState,
} from '../../models/isc/isc.interface'

import signalChain16 from '../../assets/signalChain/signalChain_16.png'
import schematic16 from '../../assets/schematic/schematic_16.png'
import signalChain18 from '../../assets/signalChain/signalChain_18.png'
import schematic18 from '../../assets/schematic/schematic_18.png'
import signalChainAD4021 from '../../assets/signalChain/signalChain_AD4021.png'
import schematicAD4021 from '../../assets/schematic/schematic_AD4021.png'

export interface IscAppState {
  ranges: IscRangeState
  activeRanges: IscActiveRanges
  rangesScenarios?: IscActiveRangeScenarios
  activeRangeScenarioKey: string
  pictogramLinkScenarios: IscPictogramScenarios
  snr: string
  viewDropdownOptions: string[]
  viewDropdown: string
  viewPictogram: string
  noiseToolURL: string
  pictogramCrossFade: boolean
  setRanges: Dispatch<SetStateAction<IscRangeState>>
  setActiveRanges: Dispatch<SetStateAction<IscActiveRanges>>
  setActiveRangeScenarioKey: Dispatch<SetStateAction<string>>
  setSnr: Dispatch<SetStateAction<string>>
  setPictogramCrossFade: Dispatch<SetStateAction<boolean>>
  setViewDropdownOptions: Dispatch<SetStateAction<string[]>>
  setViewDropdown: Dispatch<SetStateAction<string>>
  setViewPictogram: Dispatch<SetStateAction<string>>
  setNoiseToolURL: Dispatch<SetStateAction<string>>
}

export interface AppStateProvider {
  children?: React.ReactNode
}

export const defaultState: IscAppState = {
  ranges: {
    inputSignalRange: [
      { name: '50uA', value: 50 },
      { name: '100uA', value: 100 },
      { name: '200uA', value: 200 },
    ],
    bandwidth: [
      { name: '10kHz', value: 10 },
      { name: '100kHz', value: 100 },
      { name: '1MHz', value: 1 },
    ],
    resolution: [
      { name: '16Bit', value: 16 },
      { name: '18Bit', value: 18 },
      { name: '20Bit', value: 20 },
    ],
  },
  activeRanges: {
    inputSignalRange: '50uA',
    bandwidth: '10kHz',
    resolution: '16Bit',
  },
  rangesScenarios: {
    '89.1': {
      inputSignalRange: '200uA',
      bandwidth: '1MHz',
      resolution: '16Bit',
    },
    '82.5': {
      inputSignalRange: '50uA',
      bandwidth: '100kHz',
      resolution: '18Bit',
    },
    '93.9': {
      inputSignalRange: '100uA',
      bandwidth: '1MHz',
      resolution: '16Bit',
    },
  },
  activeRangeScenarioKey: '89.1',
  pictogramLinkScenarios: {
    '89.1': {
      pictogram: {
        signalChain: signalChain16,
        schematic: schematic16,
      },
      noiseToolURL: 'https://beta-tools.analog.com/noise/#highSpeedPrecision',
    },
    '82.5': {
      pictogram: {
        signalChain: signalChain18,
        schematic: schematic18,
      },
      noiseToolURL:
        'https://beta-tools.analog.com/noise/#session=_pzCjqrWck2OCp8w7nlNwQ&step=x7I7MoLyReuU_X0kO7F-zg',
    },
    '93.9': {
      pictogram: {
        signalChain: signalChainAD4021,
        schematic: schematicAD4021,
      },
      noiseToolURL:
        'https://beta-tools.analog.com/noise/#session=F_K-zpa5jkGQu9OpM5WzPQ&step=EfoC7Q5xQTaZvgDBBFnL8A',
    },
  },
  snr: '89.1',
  viewDropdownOptions: ['Signal Chain', 'Schematic'],
  viewDropdown: 'signalChain',
  viewPictogram: signalChain16,
  noiseToolURL: 'https://beta-tools.analog.com/noise/#highSpeedPrecision',
  pictogramCrossFade: true,
  setRanges: () => {},
  setActiveRanges: () => {},
  setActiveRangeScenarioKey: () => {},
  setSnr: () => {},
  setViewDropdownOptions: () => {},
  setViewDropdown: () => {},
  setViewPictogram: () => {},
  setPictogramCrossFade: () => {},
  setNoiseToolURL: () => {},
}

export const AppState = createContext(defaultState)
AppState.displayName = 'AppStateContext'

export const AppStateContext = ({ children }: AppStateProvider) => {
  const rangesScenarios = defaultState.rangesScenarios
  const pictogramLinkScenarios = defaultState.pictogramLinkScenarios
  const [ranges, setRanges] = useState<IscRangeState>(defaultState.ranges)
  const [activeRanges, setActiveRanges] = useState<IscActiveRanges>(
    defaultState.activeRanges,
  )
  const [activeRangeScenarioKey, setActiveRangeScenarioKey] = useState(
    defaultState.activeRangeScenarioKey,
  )
  const [snr, setSnr] = useState(defaultState.snr)
  const [viewDropdownOptions, setViewDropdownOptions] = useState<string[]>(
    defaultState.viewDropdownOptions,
  )
  const [viewDropdown, setViewDropdown] = useState(defaultState.viewDropdown)
  const [viewPictogram, setViewPictogram] = useState(defaultState.viewPictogram)
  const [noiseToolURL, setNoiseToolURL] = useState(defaultState.noiseToolURL)
  const [pictogramCrossFade, setPictogramCrossFade] = useState(true)

  const contextState = useMemo(
    () => ({
      ranges,
      activeRanges,
      rangesScenarios,
      activeRangeScenarioKey,
      pictogramLinkScenarios,
      pictogramCrossFade,
      snr,
      viewDropdownOptions,
      viewDropdown,
      viewPictogram,
      noiseToolURL,
      setRanges,
      setActiveRanges,
      setActiveRangeScenarioKey,
      setSnr,
      setViewDropdownOptions,
      setViewDropdown,
      setViewPictogram,
      setNoiseToolURL,
      setPictogramCrossFade,
    }),
    [
      ranges,
      activeRanges,
      rangesScenarios,
      activeRangeScenarioKey,
      pictogramLinkScenarios,
      snr,
      viewDropdownOptions,
      viewDropdown,
      viewPictogram,
      noiseToolURL,
      pictogramCrossFade,
      setRanges,
      setActiveRanges,
      setActiveRangeScenarioKey,
      setSnr,
      setViewDropdownOptions,
      setViewDropdown,
      setViewPictogram,
      setNoiseToolURL,
      setPictogramCrossFade,
    ],
  )

  return <AppState.Provider value={contextState}>{children}</AppState.Provider>
}
