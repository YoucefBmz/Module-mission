import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: "Do you want to delete this driver?",
    icon: <ExclamationCircleOutlined />,
    content:
      "When clicked the OK button, this driver will be removed from your list",
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
}

export default showDeleteConfirm;
