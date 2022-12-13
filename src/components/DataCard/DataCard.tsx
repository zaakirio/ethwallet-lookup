import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import './DataCard.css'
import { AntDesignOutlined, ApartmentOutlined, NodeIndexOutlined, UserOutlined } from '@ant-design/icons';
const DataCard: React.FC = () => (
  <Row gutter={24} justify="center" className="card-padding">
    <Col span={4}>
      <Card bordered={true} className="card-shadow">
        <Avatar size={64} icon={<UserOutlined />} />
        <p>Current Price</p>
        <p>24HR High</p>       
        <p>24HR Low</p>
      </Card>
    </Col>
    <Col span={4}>
      <Card  bordered={true} className="card-shadow">
        <Avatar size={64} icon={<NodeIndexOutlined />
        } />
        ETH GAS FEES
        24h high
        24h low
      </Card>
    </Col>
    <Col span={4}>

      <Card  bordered={true} className="card-shadow">
              <Avatar size={64} icon={<ApartmentOutlined />
      } />
        Current staking rates
        
      </Card>
      
    </Col>
    <Col span={4}>

<Card  bordered={true} className="card-shadow">
        <Avatar size={64} icon={<ApartmentOutlined />
} />
  Current staking rates
  
</Card>

</Col>
<Col span={4}>

<Card  bordered={true} className="card-shadow">
        <Avatar size={64} icon={<ApartmentOutlined />
} />
  Staking Pools
  
</Card>

</Col>
  </Row>
);

export default DataCard;