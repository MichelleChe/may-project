import SvgIcon from "@/components/svgIcon/svgIcon"
import styles from './index.module.less'
import copy from 'copy-to-clipboard'
import { message } from "antd"
const SvgView = () => {
  const svgList = ['check', 'react']

  const copyKey = (key) => {
    copy(key)
    message.success('复制成功')
  }

  return (
    <>
      <div>项目中使用的svg预览，快速查看已有icon</div>
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
    </>
  )
}

export default SvgView