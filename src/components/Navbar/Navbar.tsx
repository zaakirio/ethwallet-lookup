import React from 'react';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { CalculatorOutlined, HomeOutlined, WalletOutlined } from '@ant-design/icons';
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
                    className="layout"
                />
        </Layout>
    );
};

export default App;