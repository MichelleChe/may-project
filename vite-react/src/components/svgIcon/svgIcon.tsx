import styles from './index.module.less'
import classnames from 'classnames'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext?.keys?.()?.forEach?.(requireContext)
}

try {
  importAll(window.require?.context?.('../assets/svg', false, /\.svg$/))
} catch (error) {
  console.log(`svg导入失败${error}`)
}

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