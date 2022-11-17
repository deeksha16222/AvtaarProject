import { Button, Modal } from "antd";
import React, { useState } from "react";
const Modals = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  setIsModalOpen(props.opens);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Name : <input type="text" />
        Email : <input type="email" />
        Phone : <input type="phone" />
        Website : <input type="text" />
      </Modal>
    </>
  );
};
export default Modals;
