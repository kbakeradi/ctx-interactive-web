import { ChangeEvent, useContext, useEffect } from 'react'
import { shallowCompare } from '../../util/shallowComparison'
import { Slider } from '../common/slider/slider'
import { Typography } from '../common/typography/typography'
import { AppState } from '../providers/appStateProvider'
import { IscSNR } from './form/iscSNR/iscSNR'
import { IscView } from './form/iscView/iscView'
import styles from './iscContainer.module.scss'

export const IscContainer = () => {
  const {
    ranges,
    rangesScenarios,
    activeRanges,
    snr,
    setActiveRanges,
    setSnr,
    setActiveRangeScenarioKey,
  } = useContext(AppState)

  const handleSliderChange = (
    e: ChangeEvent<HTMLInputElement>,
    rangeKey: string,
  ) => {
    setActiveRanges((prevState: any) => ({
      ...prevState,
      [rangeKey]: e.target.value,
    }))
  }

  useEffect(() => {
    Object.entries(rangesScenarios!).forEach(([key, value]) => {
      if (shallowCompare(value, activeRanges)) {
        setSnr(key)
        setActiveRangeScenarioKey(key)
      }
    })
  }, [activeRanges])

  return (
    <>
      <div className={styles.instruction}>
        <Typography
          variant="body1"
          text="Adjust the parameters below to achieve the desired complete signal chain SNR (Signal to Noise Ratio)."
        />
      </div>
      <div className={styles.container}>
        <div className={styles.ranges}>
          <div className={styles.range}>
            <Slider
              title="Input Signal Range"
              items={ranges?.inputSignalRange}
              activeItem={activeRanges.inputSignalRange}
              onChange={(e) => handleSliderChange(e, 'inputSignalRange')}
            />
          </div>
          <div className={styles.bandwidth}>
            <Slider
              title="Bandwidth"
              items={ranges.bandwidth}
              activeItem={activeRanges.bandwidth}
              onChange={(e) => handleSliderChange(e, 'bandwidth')}
            />
          </div>
          <div className={styles.resolution}>
            <Slider
              title="Resolution"
              items={ranges.resolution}
              activeItem={activeRanges.resolution}
              onChange={(e) => handleSliderChange(e, 'resolution')}
            />
          </div>
          <div className={styles.snr}>
            <IscSNR amount={snr} />
          </div>
        </div>
        <IscView />
      </div>
    </>
  )
}
