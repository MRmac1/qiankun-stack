import { FC, useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import AppSider from "../Sider";
import TopNav from "../TopNav";

import './index.css';

const { Content } = Layout;

const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='app'>
      <TopNav />
      <Layout className="site-layout">
        <AppSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          <div id='container' />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;