import React from 'react';
import { Breadcrumb, Input, InputNumber, Layout, Menu, MenuProps, Select, theme } from 'antd';
import { CalculatorOutlined, HomeOutlined, WalletOutlined } from '@ant-design/icons';
import DataCard from '../DataCard/DataCard';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: 'Wallet Tracker',
            key: 'wallet-tracker',
            icon: <WalletOutlined />
        },
        {
            label: 'Staking Calculator',
            key: 'staking',
            icon: <CalculatorOutlined />
        },
    ]

    return (
       <Layout className="layout">
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className="layout" />

        </Layout>
    );
};

export default App;