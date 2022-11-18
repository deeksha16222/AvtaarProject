import React, { useState } from "react";
import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

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
  const [defaults, setDefaults] = useState("");
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      Username: defaults?.name,
      email: defaults?.email,
      Phone: defaults?.phone,
      website: defaults?.website,
    });
  }, [form, defaults]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState("");

  const handleOk = () => {
    setDefaults("");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setDefaults("");
    setIsModalOpen(false);
  };

  function change() {
    setIsModalOpen(true);
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
                      setDefaults(element);
                      change();
                    }}
                  />,
                  <DeleteFilled key="delete" onClick={()=>props.deleteUser(element.id)}/>,
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <FormItem
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
            </FormItem>

            <FormItem
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
            </FormItem>
            <FormItem
              label="Phone"
              name="Phone"
              rules={[
                {
                  required: true,
                  message: "Please input mobile number!",
                },
              ]}
            >
              <Input type="text" />
            </FormItem>
            <FormItem
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
            </FormItem>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
