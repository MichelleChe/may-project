import SvgIcon from "@/components/svgIcon/svgIcon"
import styles from './index.module.less'
import copy from 'copy-to-clipboard'
import { message } from "antd"
// 批量导入svg
const icons = import.meta.glob<Record<string, string>>('@/assets/svg/*.svg', { eager: true })

const svgList = Object.values(icons).map((mode) => {
  return mode.default.split('/').at(-1)?.replace(/.svg$/, '') || ''
}).filter(Boolean)

const SvgView = () => {
  const copyKey = (key) => {
    copy(key)
    message.success('复制成功')
  }

  return (
    <div className={styles.page}>
      <div className="mb10">
        项目中使用的svg预览，快速查看已有svg
      </div>
      <ul className={styles.ul}>
        {
          svgList.map((item) => (
            <li key={item} className={styles.li} onClick={() => copyKey(item)}>
              <SvgIcon name={item} />
              <span className="pl5">{item}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SvgView