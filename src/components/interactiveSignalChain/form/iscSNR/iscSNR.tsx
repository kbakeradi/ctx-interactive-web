import { Typography } from '../../../common/typography/typography'
import styles from './iscSNR.module.scss'

interface IscSNR {
  amount: string
}

export const IscSNR = ({ amount }: IscSNR) => (
  <div className={styles.container}>
    <div className={styles.containerTitle}>
      <Typography variant="body2" text="SNR" />
    </div>
    <div className={styles.containerAmount}>
      <Typography variant="h1" text={`${amount} dB`} />
    </div>
  </div>
)
