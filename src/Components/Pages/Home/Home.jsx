import React from 'react'
import { Layout, Row, Col } from 'antd'

import './Home.scss'
import Card from './Blocks/Card'

const { Header, Footer, Sider, Content } = Layout

const data = [
  {
    id: 1,
    name: 'шарик',
    image:
      'https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg',
    price: '20'
  },
  {
    id: 2,
    name: 'футболка',
    image:
      'https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg',
    price: '100'
  },
  {
    id: 4,
    name: 'шарик 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
    price: '40'
  }
]

export const Home = () => {
  return (
    <Layout className='wrapper'>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Row>
            {data.map((el) => (
              <Col span='8'>
                <Card key={el.id} item={el} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
