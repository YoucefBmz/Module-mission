import React from "react";
import { gql, useMutation } from "@apollo/client";

import { GET_DRIVER } from "../../hooks/useQueryDetails";
import { Modal, Form, Button, Input } from "antd";

const Model = ({ visible, rmModal, user, refetch }) => {
  const UPDATE_DRIVER = gql`
    mutation updateDriver($NIDN: String, $driver: DriverUpdateInput) {
      updateDriver(NIDN: $NIDN, driver: $driver) {
        id
        NIDN
        firstname
        lastname
        email
        direction
        phone
        driver_status
        account_status
      }
    }
  `;

  const [updateDriver, { data, loading, error }] = useMutation(UPDATE_DRIVER);

  // fncts ...
  const onFinish = (values) => {
    updateDriver({
      variables: {
        NIDN: user.NIDN,
        driver: {
          firstname: `${values.Name}`,
          email: values.Email,
          direction: values.Direction,
          phone: values["Phone number"],
        },
      },
      refetchQueries: [{ query: GET_DRIVER }],
      update(cache, { data: updateDriver }) {},
    });
    rmModal();
    refetch();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title='Edit Driver'
      centered
      visible={visible}
      onCancel={rmModal}
      footer={[]}>
      {error && <h2>error ...</h2>}
      <Form
        onFinish={onFinish}
        layout='vertical'
        onFinishFailed={onFinishFailed}
        autoComplete='off'>
        <Form.Item
          label='Name'
          name='Name'
          initialValue={user.firstname}
          rules={[
            { required: true, message: "Please input a name of a driver" },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='NIDN'
          name='NIDN'
          initialValue={user.NIDN}
          rules={[{ required: true, message: "Please input NIDN !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Phone number'
          name='Phone number'
          initialValue={user.phone}
          rules={[{ required: true, message: "Please input Phone number !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='Email'
          initialValue={user.email}
          rules={[{ required: true, message: "Please input Email !" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Direction'
          name='Direction'
          initialValue={user.direction}
          rules={[{ required: true, message: "Please input Direction !" }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Model;
