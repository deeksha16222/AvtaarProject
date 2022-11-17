import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { EditOutlined, HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Modals from "./Modals";
const { Meta } = Card;
export default function Cards(props) {
  const [opens, setOpens] = useState(false);
  return (
    <div>
      <div className="container">
        {props.data.map((element, id) => {
          return (
            <div className="cart">
              <Card
                style={{
                  width: "300px",
                }}
                cover={
                  <img
                    src={`https://avatars.dicebear.com/v2/avataaars/${element?.username}.svg?options[mood][]=happy`}
                    alt="j"
                  />
                }
                actions={[
                  <HeartOutlined key="like" />,
                  <EditOutlined key="edit" onClick={() => setOpens(true)} />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta title={element.name} description={element.phone} />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
