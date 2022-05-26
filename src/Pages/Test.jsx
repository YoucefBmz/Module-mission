import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { PieChartOutlined, CarOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Test = () => {
  let [state, setState] = useState({ collapsed: false });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  const { collapsed } = state;
  return (
    <div className='dashboard'>
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
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item key='1' icon={<PieChartOutlined />}>
                see Missions
              </Menu.Item>
              <Menu.Item key='2' icon={<UserOutlined />}>
                see all drivers
              </Menu.Item>
              <Menu.Item key='3' icon={<CarOutlined />}>
                see cars
              </Menu.Item>
              <SubMenu key='sub4' icon={<UserOutlined />} title='subnav 4'>
                <Menu.Item key='5'>option1</Menu.Item>
                <Menu.Item key='6'>option2</Menu.Item>
                <Menu.Item key='7'>option3</Menu.Item>
                <Menu.Item key='8'>option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Breadcrumb style={{ margin: "16px 10px" }}>
              <Breadcrumb.Item>Test</Breadcrumb.Item>
              <Breadcrumb.Item>Missions</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                margin: "0 16px",
                background: "#fff",
                borderRadius: "7px",
              }}>
              <div
                className='site-layout-background'
                style={{ padding: 24, minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design & reactjs ©2021 Created by Youcef Bmz
        </Footer>
      </Layout>
    </div>
  );
};

export default Test;
