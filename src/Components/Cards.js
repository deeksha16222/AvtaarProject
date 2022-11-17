import React, { useState } from "react";
import { Form, Input } from "antd";
import { Modal } from "antd";
import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
export default function Cards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState("");
  const [defaults, setDefaults] = useState();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function change(element) {
    setIsModalOpen(true);
    setDefaults(element);
  }

  function manage() {
    setLiked("red");
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container">
        {props.data.map((element, id) => {
          return (
            <div className="cart">
              <Card
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
                  <EditOutlined
                    key="edit"
                    onClick={() => {
                      change(element);
                    }}
                  />,
                  <DeleteFilled key="delete" />,
                ]}
              >
                <div className="description">
                  <p className="textxl">{element.name}</p>

                  <p style={{ margin: 0 }}>
                    <MailOutlined /> {element.email}
                  </p>
                  <p style={{ margin: 0 }}>
                    <PhoneOutlined /> {element.phone}
                  </p>
                  <p style={{ margin: 0 }}>
                    {" "}
                    <GlobalOutlined /> http://{element.website}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="box">
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="Phone"
              rules={[
                {
                  required: true,
                  message: "Please input mobile number!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Company"
              name="website"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
