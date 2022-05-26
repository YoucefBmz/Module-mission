import React from "react";

import { Modal, Form, Button, Input } from "antd";

const ModalVehiule = ({ visible, rmModal }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title='Edit Vehicule'
      centered
      visible={visible}
      onCancel={rmModal}
      footer={[
        <Button key='back' onClick={rmModal}>
          Cancel
        </Button>,
        <Button key='submit' type='primary'>
          Submit
        </Button>,
      ]}>
      <Form
        onFinish={onFinish}
        layout='vertical'
        onFinishFailed={onFinishFailed}
        autoComplete='off'>
        <Form.Item
          label='Name'
          name='Name'
          rules={[
            { required: true, message: "Please input a name of a driver" },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='NIDN'
          name='NIDN'
          rules={[{ required: true, message: "Please input NIDN !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Phone number'
          name='Phone number'
          rules={[{ required: true, message: "Please input Phone number !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='Email'
          rules={[{ required: true, message: "Please input Email !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Direction'
          name='Direction'
          rules={[{ required: true, message: "Please input Direction !" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalVehiule;
