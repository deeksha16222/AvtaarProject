import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { EditOutlined, HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
export default function Cards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function change() {
    setIsModalOpen(true);
  }

  function manage() {
    setLiked("red");
  }
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
                    alt="icon"
                  />
                }
                actions={[
                  <HeartOutlined
                    key="like"
                    onClick={manage}
                    style={{ color: liked }}
                  />,
                  <EditOutlined key="edit" onClick={change} />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta title={element.name} description={element.phone} />
              </Card>
            </div>
          );
        })}
      </div>
      <div className="box">
        <Modal
          {...props}
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="boxcontain">
            {" "}
            Name : <input type="text" />{" "}
          </div>
          <div className="boxcontain">
            {" "}
            Email : <input type="email" />{" "}
          </div>
          <div className="boxcontain">
            {" "}
            Phone : <input type="phone" />{" "}
          </div>
          <div className="boxcontain">
            {" "}
            Website : <input type="text" />{" "}
          </div>
        </Modal>
      </div>
    </div>
  );
}
