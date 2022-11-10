import { ChangeEvent, Fragment } from 'react'
import { IscRangeItem } from '../../../models/isc/isc.interface'
import { Typography } from '../typography/typography'
import styles from './slider.module.scss'

interface Slider {
  title: string
  items: IscRangeItem[]
  activeItem?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Slider = ({ title, activeItem, items, onChange }: Slider) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <Typography variant="body2" text={title} />
      </div>
      <div className={styles.slider}>
        {items?.map((item: IscRangeItem) => (
          <Fragment key={item.name}>
            <input
              type="radio"
              name={title}
              id={item.name}
              value={item.name}
              checked={item.name === activeItem}
              onChange={onChange}
              required
            />
            <label htmlFor={item.name} data-label={item.name}></label>
          </Fragment>
        ))}
        <div className={styles.sliderCurrentPointer}></div>
      </div>
    </div>
  )
}
