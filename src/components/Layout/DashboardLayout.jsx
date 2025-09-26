import React, { useState } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar/Navbar';
import AppHeader from './Header/Header';
import AppFooter from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar collapsed={collapsed} onCollapse={setCollapsed} />

      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>

        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
