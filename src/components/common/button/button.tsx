import styles from './button.module.scss'

interface Button {
  children: React.ReactElement | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, onClick }: Button) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)
