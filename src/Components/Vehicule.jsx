import React, { useState } from "react";
import { Table, Tag, Button } from "antd";
import { Link } from "react-router-dom";
import { useVehicules } from "../hooks/useQueries";

const Cars = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    pageSize: 5,
  });
  const [offset, setOffset] = useState(0);
  const columns = [
    {
      title: "Kind",
      dataIndex: "kind",
      key: "kind",
      render: (text, record) => (
        <>
          <h4> {record.kind}</h4>
          <span
            class='ant-page-header-heading-sub-title'
            title='second level detail'>
            {record.kind}
          </span>
        </>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (text, record) => (
        <>
          <h4> {record.brand}</h4>
        </>
      ),
    },
    {
      title: "Registration number",
      dataIndex: "regnum",
      key: "regnum",
    },
    {
      title: "Serial number",
      dataIndex: "serienum",
      key: "serienum",
      render: (text, record) => (
        <>
          <span
            class='ant-page-header-heading-sub-title'
            title='second level detail'>
            {record.serienum}
          </span>
        </>
      ),
    },
    {
      title: "Status",
      key: "status",
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
      onFilter: (value, record) => record.status.includes(value),
      dataIndex: "status",
      render: (status) => (
        <>
          <Tag
            color={
              status === "AVAILABLE"
                ? "green"
                : status === "SUSPENDED"
                ? "volcano"
                : "blue"
            }
            key={status}>
            {status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      filters: [
        {
          text: "LIGHT",
          value: "LIGHT",
        },
        {
          text: "HEAVY",
          value: "HEAVY",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.type.includes(value),
      render: (type) => (
        <>
          <Tag color={type === "HEAVY" ? "green" : "volcano"}>
            {type.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Link to={`/dashboard/vehicules/${record.key}`}>
          {" "}
          <Button type='primary' ghost>
            See more
          </Button>
        </Link>
      ),
    },
  ];
  const { data, loading, error } = useVehicules(offset, pagination.pageSize);

  // limit = pagesize
  // offset = pagination.pageSize * (pagination.current - 1)
  const handleTableChange = (pagination) => {
    setOffset(pagination.pageSize * (pagination.current - 1));
    setPage(pagination.current);
  };
  return (
    <>
      <h2>Vehicles</h2>

      <Table
        columns={columns}
        pagination={{
          current: page,
          pageSize: pagination.pageSize,

          total: data?.vehiclesCount ?? 0,
        }}
        onChange={handleTableChange}
        loading={loading}
        dataSource={data?.vehicles}
      />
    </>
  );
};

export default Cars;
/*

Vehicles table: includes the following columns:
- ID 
- Kind: contains two lines: primary line Kind and subline grayed 
- Brand
- Registration number
- Serial number 
- Status (AVAILABLE, IN_MISSION, SUSPEND)
- Type (LIGHT, HEAVY) 



*/
