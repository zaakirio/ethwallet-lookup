import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import './DataCard.css'
import { AntDesignOutlined, ApartmentOutlined, NodeIndexOutlined, UserOutlined } from '@ant-design/icons';
const DataCard: React.FC = () => (
  <Row gutter={24} justify="center" className="card-padding">
    <Col span={4}>
      <Card bordered={true} className="card-shadow">
        <p>Current Price</p>
        <p>24HR High</p>       
      </Card>
    </Col>
    <Col span={4}>
      <Card  bordered={true} className="card-shadow">
      <p>ETH gas fees</p>
        <p>24HR High</p>   
      </Card>
    </Col>
    <Col span={4}>

      <Card  bordered={true} className="card-shadow">
      <p>Staking pools</p>
        <p>current staking pools</p>   
      </Card>
      
    </Col>
    <Col span={4}>

<Card  bordered={true} className="card-shadow">
  Current staking rates
  
</Card>

</Col>
<Col span={4}>

<Card  bordered={true} className="card-shadow">
<p>Decentralisation</p>
        <p>value</p>   
  
</Card>

</Col>
  </Row>
);

export default DataCard;