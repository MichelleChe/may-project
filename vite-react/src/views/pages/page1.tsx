import { FC, useState } from "react"
import { Button } from "antd"
import styles from './page1.module.less'
import { testAsync, selectTestName } from "@/store/test"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import store from "@/store";
import SvgIcon from "@/components/svgIcon/svgIcon";
import cls from 'classnames'
import { useNavigate } from "react-router-dom"

const Page1: FC = () => {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { value } = useAppSelector((state) => state.test);
  const name = selectTestName(store.getState().test);

  const toPage2 = () => {
    navigate('/page2')
  }
  return (
    <div className={styles.card}>
      <Button className={styles.red} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <Button onClick={toPage2}>page2</Button>

      <div className={cls(styles.text, 'ft12', 'color')}>
        风华绝代身份和大姐夫好的师傅虎岛和夫大姐夫和大姐夫好``
      </div>
      <div onClick={() => dispatch(testAsync())}>click</div>
      {value}
      {name}
      <SvgIcon className={styles.icon} name='check' />
    </div>
  );
};

export default Page1;
