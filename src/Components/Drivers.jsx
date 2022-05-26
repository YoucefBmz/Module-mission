import React, { useState } from "react";
import { Table, Tag, Button } from "antd";

import { Link } from "react-router-dom";
import { useDrivers } from "../hooks/useQueries";

const columns = [
  {
    title: "Name",
    dataIndex: "firstname",
    key: "firstname",
    render: (text, record) => (
      <>
        <h4>
          {record.firstname} {record.lastname}
        </h4>
        <span
          class='ant-page-header-heading-sub-title'
          title='second level detail'>
          {record.NIDN}
        </span>
      </>
    ),
  },
  {
    title: "Direction",
    dataIndex: "direction",
    key: "direction",
    filters: [
      {
        text: "Algiers",
        value: "Algiers",
      },
      {
        text: "Constantine",
        value: "Constantine",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.destination.includes(value),
  },
  {
    title: "Status",
    key: "driver_status",
    filters: [
      {
        text: "AVAILABLE",
        value: "AVAILABLE",
      },
      {
        text: "IN MISSION",
        value: "IN MISSION",
      },
      {
        text: "SUSPENDED",
        value: "SUSPENDED",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.driver_status.includes(value),

    dataIndex: "driver_status",
    render: (status) => (
      <>
        <Tag color={status === "AVAILABLE" ? "green" : "volcano"} key={status}>
          {status}
        </Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Link to={`/dashboard/drivers/${record.NIDN}`}>
        {" "}
        <Button type='primary' ghost>
          See more
        </Button>
      </Link>
    ),
  },
];

const Drivers = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useDrivers(offset, pageSize);

  const handleTableChange = (pagination) => {
    setOffset(pagination.pageSize * (pagination.current - 1));
    setPage(pagination.current);
  };
  return (
    <>
      <h2>Drivers</h2>
      <Table
        columns={columns}
        pagination={{
          pageSize: 5,
          total: data?.driversCount,
          current: page,
        }}
        onChange={handleTableChange}
        loading={loading}
        dataSource={data?.drivers}
      />
    </>
  );
};

export default Drivers;

/*

Drivers table:
Drivers table contains the following column:
1. Full name includes two line:
   - Main line represents full name
   - Subline grayed and in smaller font size represents drivers 
   national identification number (NIDN)

2. Direction : the management the driver belongs to (ALGIERS, CONSTANTINE)

3. Status: (AVAILABLE, IN MISSION, SUSPENDED)


Driver detail:
Includes the following items:
1. Driver's information: includes
  - Driver firstname
  - Driver lastname
  - Phone number
  - NIDN 
  - Status
  - Direction

2. Suspend/Unsuspend driver: button to toggle driver status between
 SUSPEND and AVAILABLE states.

3. Edit driver information: button to enable driver's information edition.

*/
