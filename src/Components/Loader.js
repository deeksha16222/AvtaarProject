import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loader() {
  const antIcon = (
    <LoadingOutlined
    style={{
      fontSize: "30vh",
      margin:"10px auto"
    }}
    className="load"
      spin
    />
  );
  return <Spin indicator={antIcon} />;
}
