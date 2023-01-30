import React, { FC } from "react";
import { Menu, Layout } from "antd";
import type { MenuProps } from 'antd'
import './index.css'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import {
  FacebookOutlined,
  GoogleOutlined,
  DribbbleOutlined,
} from '@ant-design/icons';

interface ISider {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
}

const Sider: FC<ISider> = (props) => {
  const { collapsed, setCollapsed } = props
  const menuItems: MenuProps['items'] = [{
    key: 'react',
    label: 'react',
    icon: <FacebookOutlined />
  },
  {
    key: 'vue',
    label: 'vue',
    icon: <GoogleOutlined />
  },
  {
    key: 'docusaurus',
    label: 'docusaurus',
    icon: <DribbbleOutlined />
  }];
    return <Layout.Sider trigger={null} collapsible collapsed={props.collapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuItems}
        style={{ height: "100%" }}
      />
      <span className="collapsible-switch">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </span>
    </Layout.Sider>
}

export default Sider