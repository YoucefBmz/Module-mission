import React, { useState } from "react";
import { PageHeader, Button, Descriptions, Tag } from "antd";
import ModalVehiule from "../Modals/ModalVehicule";
import { useVehicule } from "../../hooks/useQueryDetails";
import { useParams } from "react-router";

const VehiculeDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useVehicule(parseInt(id));

  const [visible, setVisible] = useState(false);
  const openVehiculeModal = () => {
    setVisible(true);
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
            title={data.vehicle.kind}
            subTitle={data.vehicle.brand}
            tags={<Tag color='green'>AVAILABLE</Tag>}
            extra={[
              <Button key='1' type='primary' ghost>
                Edit vehicule info
              </Button>,
              <Button key='2' type='primary' danger ghost>
                Suspend
              </Button>,
            ]}>
            <Descriptions bordered>
              <Descriptions.Item label='kind' span={1}>
                {data.vehicle.kind}
              </Descriptions.Item>
              <Descriptions.Item label='brand' span={1}>
                {data.vehicle.brand}
              </Descriptions.Item>
              <Descriptions.Item label='registration number' span={1}>
                {data.vehicle.regnum}
              </Descriptions.Item>
              <Descriptions.Item label='Number of places' span={1}>
                {data.vehicle.places}
              </Descriptions.Item>
              <Descriptions.Item label='Serial number' span={1}>
                {data.vehicle.serienum}
              </Descriptions.Item>
              <Descriptions.Item label='Type' span={1}>
                {data.vehicle.type}
              </Descriptions.Item>
            </Descriptions>
            <Button
              key='3'
              type='primary'
              ghost
              style={{ margin: "25px 0" }}
              onClick={() => openVehiculeModal()}>
              Edit general vehicule info
            </Button>
            <ModalVehiule visible={visible} rmModal={rmModal} />
            <br />
            <h3>
              State information: includes the following properties: - Milage, -
              Last oil change, - Technical control, - Assurance.
            </h3>
            <Descriptions bordered>
              <Descriptions.Item label='Milage' span={3}>
                {data.vehicle.milage}
              </Descriptions.Item>
              <Descriptions.Item label='Last oil change' span={3}>
                {data.vehicle.oilchange}
              </Descriptions.Item>
              <Descriptions.Item label='Technical control' span={3}>
                {data.vehicle.techcontrol}
              </Descriptions.Item>
              <Descriptions.Item label='Assurance' span={3}>
                {data.vehicle.assurance}
              </Descriptions.Item>
            </Descriptions>
            <Button
              key='4'
              type='primary'
              ghost
              style={{ margin: "25px 0" }}
              onClick={() => openVehiculeModal()}>
              Edit state vehicule info
            </Button>
          </PageHeader>
        )}
      </div>
    </>
  );
};

export default VehiculeDetails;
/*

Vehicle:
id
regnum (registration number "matricule")
serienum 
year
type ( LIGHT or HEAVY )
places
brand
kind
milage
oilchange
techcontrol
assurance

milage chhal mchat tonobile (conteur)
serienum numero de chasi
oilchange howa kilomètrage li kanet fih vehicle kima dernalha l vidange lakahar
Techcontrol (date of format DD-MM-YYYY) controle technique
La date ta3 lakhar
Assurance (date format DD-MM-YYYY) date ta3 akhir mara dernalha assurance




******

Vehicle details: vehicle route details holds the following section 
of vehicle informations:
- General information section: 
                groupe the following properties: 
                                    - kind, - brand, - registration number,
                                     - Number of places, - Type, - Serial number,
                                      - Year, - Status.
                                      
- State information: includes the following properties: 
                        - Milage,
                         - Last oil change,
                          - Technical control,
                           - Assurance.

From vehicle details route the following actions can be done:
- Edit vehicle general information.
- Update vehicle state information.
- Delete vehicle
*/
