import React, { useState } from "react";
import { Table, Tag, Button } from "antd";
import { Link } from "react-router-dom";
import { KEYS_LABLES } from "../constants/EXPENSES_TYPES";
import { useMissions } from "../hooks/useQueries";
const columns = [
  {
    title: "Reference",
    dataIndex: "ref",
    key: "ref",
    render: (text, record) => (
      <>
        <h4> {record.ref}</h4>
        <span
          class='ant-page-header-heading-sub-title'
          title='second level detail'>
          {record.created_at}
        </span>
      </>
    ),
  },
  {
    title: "Actors",
    dataIndex: "missionary_name",
    key: "missionary_name",
    render: (text, record) => (
      <>
        <h4> {record.missionary_name}</h4>
        <span
          class='ant-page-header-heading-sub-title'
          title='second level detail'>
          {record.creator_name}
        </span>
      </>
    ),
  },
  {
    title: "Departure",
    dataIndex: "departure_date",
    key: "departure_date",
    render: (text, record) => (
      <>
        <h4> {record.departure_date}</h4>
        <span
          class='ant-page-header-heading-sub-title'
          title='second level detail'>
          {record.destination_location_type}
        </span>
      </>
    ),
  },
  {
    title: "Transportation medium",
    dataIndex: "trasportation_medium",
    key: "trasportation_medium",
    filters: [
      {
        text: "COMPANY MEDUIM",
        value: "COMPANY_MEDUIM",
      },
      {
        text: "PERSONAL MEDUIM",
        value: "PERSONAL_MEDUIM",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.trasportation_medium.includes(value),
    render: (text, record) => (
      <>
        <h4> {record.trasportation_medium}</h4>
        <span
          class='ant-page-header-heading-sub-title'
          title='second level detail'>
          {KEYS_LABLES[record.expenses]}
        </span>
      </>
    ),
  },
  {
    title: "Resources validation status",
    key: "resources_validation",
    dataIndex: "resources_validation",
    filters: [
      {
        text: "WAITING",
        value: "WAITING",
      },
      {
        text: "VALIDATED",
        value: "VALIDATED",
      },
      {
        text: "INVALIDATED",
        value: "INVALIDATED",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.resources_validation.includes(value),
    render: (resources_validation) => (
      <>
        <Tag color='green' key={resources_validation}>
          {resources_validation.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Link to={`/dashboard/missions/${record.key}`}>
        {" "}
        <Button type='primary' ghost>
          See more
        </Button>
      </Link>
    ),
  },
];

const dataTable = [
  {
    key: "1",
    ref: "Mission reference",
    date_of_creation: "date_of_creation",
    mission_name: "mission_name",
    creator_name: "creator name",
    mission_departure_date: "DD/MM/YYYY hh:mm",
    destination_location_types: "IN_AREA",
    transportation_medium_type: ["COMPANY_MEDUIM"],
    expenses_type: "WITH_EXPENSES",
    resources_validation: ["WAITING"],
  },
  {
    key: "2",
    mission_reference: "John Brown",
    date_of_creation: "date_of_creation",
    mission_name: "mission_name",
    creator_name: "creator name",
    mission_departure_date: "DD/MM/YYYY hh:mm",
    destination_location_types: "OUT_AREA",
    transportation_medium_type: ["COMPANY_MEDUIM"],
    expenses_type: "WITH_EXPENSES",
    resources_validation: ["VALIDATED"],
  },
  {
    key: "3",
    mission_reference: "John Brown",
    date_of_creation: "date_of_creation",
    mission_name: "mission_name",
    creator_name: "creator name",
    mission_departure_date: "DD/MM/YYYY hh:mm",
    destination_location_types: "OUT_AREA",
    transportation_medium_type: ["PERSONAL_MEDUIM"],
    expenses_type: "WITHOUT_EXPENSES",
    resources_validation: ["INVALIDATED"],
  },
];

const Missions = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useMissions(offset, pageSize, {});
  console.log({ data, loading, error });

  const handleTableChange = (pagination) => {
    setOffset(pagination.pageSize * (pagination.current - 1));
    setPage(pagination.current);
  };
  return (
    <>
      <h2>Missions</h2>
      <Table
        columns={columns}
        pagination={{
          pageSize: pageSize,
          total: data?.missionsCount,
          current: page,
        }}
        onChange={handleTableChange}
        loading={loading}
        dataSource={data?.missions}
      />
    </>
  );
};

export default Missions;
