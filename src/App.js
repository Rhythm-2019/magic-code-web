import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Layout, Input, Menu, theme, Avatar } from 'antd';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import routers from './routers'
import './App.css'

const { Header, Content, Footer } = Layout;


const App = () => {
  const items = [
    {
      label: '代码片段',
      key: 'Snippets',
      icon: <MailOutlined />,
    }
  ];

  const [selectMenuItems, setSelectMenuItem] = useState('Snippets');

  const menuOnClick = (e) => {
    setSelectMenuItem(e.key);
    // 跳转
  };

  const elements = useRoutes(routers)
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={menuOnClick}
          items={items}
          selectedKeys={selectMenuItems}
        />
        <Avatar size="large" className="myAvatar" icon={<UserOutlined />} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" >
          {elements}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};
export default App;