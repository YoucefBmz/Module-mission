import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import MissionDetails from "../Components/Details/MissionDetails";
import DriverDetails from "../Components/Details/DriverDetails";
import VehiculeDetails from "../Components/Details/VehiculeDetails";
import { UserOutlined, CarOutlined, PieChartOutlined } from "@ant-design/icons";
import Missions from "../Components/Missions";
import Drivers from "../Components/Drivers";
import Cars from "../Components/Vehicule";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [state, setState] = useState({ collapsed: false });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  const { collapsed } = state;
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const active = () => {
    if (location[location.length - 1] === "missions") return 1;
    if (location[location.length - 1] === "drivers") return 2;
    if (location[location.length - 1] === "cars") return 3;
  };
  return (
    <div className='Dashboard'>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className='header'>
          <h1 className='appTitle'>Mission module </h1>
        </Header>
        <Layout>
          <Sider
            collapsible
            width={200}
            collapsed={collapsed}
            onCollapse={onCollapse}
            className='site-layout-background'>
            <Menu
              theme='light'
              mode='inline'
              defaultSelectedKeys={[`${active()}`]}
              defaultOpenKeys={[`sub${active()}`]}
              style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item key='1' icon={<PieChartOutlined />}>
                <Link to='missions'>see missions</Link>
              </Menu.Item>
              <Menu.Item key='2' icon={<UserOutlined />}>
                <Link to='drivers'>see all drivers</Link>
              </Menu.Item>
              <Menu.Item key='3' icon={<CarOutlined />}>
                <Link to='cars'>see cars</Link>
              </Menu.Item>
              <Menu.Item key='4' icon={<CarOutlined />}>
                <Link to='cars'>Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {location.map((value, index) => {
                return <Breadcrumb.Item key={index}>{value}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                background: "#fff",
                minHeight: 280,
                borderRadius: "3px",
              }}>
              <Routes>
                <Route path='missions' element={<Missions />} />
                <Route path='drivers' element={<Drivers />} />
                <Route path='cars' element={<Cars />} />
                <Route path='missions/:id' element={<MissionDetails />} />
                <Route path='drivers/:NIDN' element={<DriverDetails />} />
                <Route path='vehicules/:id' element={<VehiculeDetails />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
