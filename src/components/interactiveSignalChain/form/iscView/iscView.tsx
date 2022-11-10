import { RefObject, useContext, useEffect, useRef } from 'react'
import { camelCase } from '../../../../util/camelCase'
import { Button } from '../../../common/button/button'
import { DropDown } from '../../../common/dropdown/dropdown'
import { Typography } from '../../../common/typography/typography'
import { AppState } from '../../../providers/appStateProvider'
import styles from './iscView.module.scss'

export const IscView = () => {
  const {
    activeRangeScenarioKey,
    pictogramLinkScenarios,
    viewPictogram,
    viewDropdown,
    noiseToolURL,
    viewDropdownOptions,
    pictogramCrossFade,
    setViewDropdown,
    setViewPictogram,
    setNoiseToolURL,
    setPictogramCrossFade,
  } = useContext(AppState)

  const handleIscSubmit = () => {
    window.open(noiseToolURL, '_BLANK', 'noopener')
  }

  const handleDropdownChange = (option: string) => {
    setViewDropdown(camelCase(option))
  }

  useEffect(() => {
    setPictogramCrossFade(false)

    if (!pictogramLinkScenarios) return

    setNoiseToolURL(pictogramLinkScenarios[activeRangeScenarioKey].noiseToolURL)
    setViewPictogram(
      pictogramLinkScenarios[activeRangeScenarioKey].pictogram[viewDropdown],
    )
    setTimeout(() => {
      setPictogramCrossFade(true)
    }, 200)
  }, [activeRangeScenarioKey, viewDropdown])

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <Typography variant="body2" text="View" />
      </div>
      <div className={styles.containerMenu}>
        <DropDown
          options={viewDropdownOptions}
          onChange={handleDropdownChange}
        />
      </div>
      <div className={styles.containerPictogram}>
        <img
          src={viewPictogram}
          alt="view-pictogram"
          style={{
            opacity: pictogramCrossFade ? 1 : 0,
            visibility: pictogramCrossFade ? 'visible' : 'hidden',
          }}
        />
      </div>
      <div className={styles.containerCTA}>
        <Button onClick={handleIscSubmit}>
          <Typography variant="button" text="Simulate in Noise Tool" />
        </Button>
      </div>
    </div>
  )
}
