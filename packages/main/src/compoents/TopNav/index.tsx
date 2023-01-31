import { FC } from "react";
import { Layout, Menu } from "antd";
import logo from '../../assets/logo.svg';
import type { MenuProps } from 'antd';
import './index.css'

const { Header } = Layout;

interface ITopNav {
    history: History
}

const TopNav: FC = () => {
    const topMenuItems: MenuProps['items'] = [{
        key: 'react',
        label: 'React 应用',
    }, {
        key: 'vue',
        label: 'Vue 应用',
    }, {
        key: 'docs',
        label: 'Docusaurus 应用',
    }]
    return <Header className='app-top-nav' style={{ padding: 0 }}>
        <img src={logo} className="app-logo" alt="logo" />
        <span className="app-title">Qiankun Stack</span>
        <Menu 
            style={{ justifyContent: "flex-end", marginRight: 48 }} 
            mode="horizontal" defaultSelectedKeys={['sub-react']} 
            items={topMenuItems} 
            onClick={({ key }) => {
                window.history.pushState({}, '', `/${key}`)
            }} 
        />
    </Header>
}

export default TopNav