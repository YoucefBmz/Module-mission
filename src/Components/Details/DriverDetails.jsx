import React, { useState } from "react";
import { PageHeader, Button, Descriptions, Tag } from "antd";
import DriverModal from "../Modals/ModalDriver";
import showDeleteConfirm from "../Modals/ConfirmModal";
import { useDriver } from "../../hooks/useQueryDetails";
import { useLocation } from "react-router-dom";

const DriverDetail = (props) => {
  const location = useLocation().pathname.split("/");
  const { data, loading, refetch } = useDriver(location[location.length - 1]);
  const [visible, setVisible] = useState(false);
  const editUserInfo = () => {
    if (visible === false) {
      setVisible(true);
    }
  };
  const rmModal = () => {
    setVisible(false);
  };

  return (
    <>
      <div className='site-page-header-ghost-wrapper'>
        {loading && (
          <div className='loading'>
            <div class='lds-facebook'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {data && (
          <PageHeader
            ghost={true}
            onBack={() => window.history.back()}
            title={data.driver.firstname}
            subTitle={data.driver.NIDN}
            tags={
              data?.driver?.driver_status === "AVAILABLE" ? (
                <Tag color='green'>AVAILABLE</Tag>
              ) : (
                <Tag color='red'>SUSPENDED</Tag>
              )
            }
            extra={[
              <Tag color='green'>AVAILABLE</Tag>,
              <Button key='1' type='primary' ghost>
                Edit driver info
              </Button>,
              <Button
                key='2'
                type='primary'
                danger
                ghost
                onClick={showDeleteConfirm}>
                Suspend
              </Button>,
            ]}>
            <br />
            <DriverModal
              visible={visible}
              rmModal={rmModal}
              user={data.driver}
              refetch={refetch}
            />
            <Descriptions bordered>
              <Descriptions.Item label='Name' span={3}>
                {data.driver.firstname}
              </Descriptions.Item>
              <Descriptions.Item label='NIDN' span={3}>
                {data.driver.NIDN}
              </Descriptions.Item>
              <Descriptions.Item label='Phone number' span={3}>
                {data.driver.phone}
              </Descriptions.Item>
              <Descriptions.Item label='Email' span={3}>
                {data.driver.email}
              </Descriptions.Item>
              <Descriptions.Item label='Direction' span={3}>
                {data.driver.direction}
              </Descriptions.Item>
            </Descriptions>
            <Button
              key='3'
              type='primary'
              ghost
              style={{ margin: "25px 0" }}
              onClick={() => editUserInfo()}>
              Edit driver info
            </Button>
          </PageHeader>
        )}
      </div>
    </>
  );
};

export default DriverDetail;
/*

Driver:
NIDN (national identification number)
lastname
firstname
direction (direction de l'entreprise)
phone
email
driver_status ( 0 wela 1 ) (0=> AVAILABLE, 1=> IN_MISSION)

Driver detail:
Includes the following items:
1. Driver's information: includes
  - Driver firstname
  - Driver lastname
  - NIDN 
  - Status
  - Phone number
  - Direction

2. Suspend/Unsuspend driver: button to toggle driver status between
 SUSPEND and AVAILABLE states.

3. Edit driver information: button to enable driver's information edition.

*/
