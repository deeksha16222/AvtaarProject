import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loader() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: "60vh",
        textAlign: "center",
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
}
