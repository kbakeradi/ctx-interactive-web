import styles from './typography.module.scss'

interface Typography {
  variant: 'h1' | 'body1' | 'body2' | 'button'
  text: string | React.ReactElement
}

export const Typography = ({ variant, text }: Typography) => (
  <span className={styles[variant]}>{text}</span>
)
