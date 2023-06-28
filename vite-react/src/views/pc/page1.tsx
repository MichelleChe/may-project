import { FC, useState } from "react";
import { Button } from "antd";
import "./page1.less";
import { testAsync, selectTestName } from "@/store/test";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import store from "@/store";

const Page1: FC = () => {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.test);
  const name = selectTestName(store.getState().test);
  return (
    <div className="card">
      <Button className="red" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <div onClick={() => dispatch(testAsync())}>click</div>
      {value}
      {name}
    </div>
  );
};

export default Page1;
