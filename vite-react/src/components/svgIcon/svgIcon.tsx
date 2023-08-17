import styles from './index.module.less'
import classnames from 'classnames'

type Props = {
  name: string, // svg文件的名字
  className?: string
}

function SvgIcon({ name, className }: Props) {

  return (
    <svg className={classnames(styles['svg-icon'], className)}>
      <use xlinkHref={'#icon-' + name} />
    </svg>
  )
}
export default SvgIcon