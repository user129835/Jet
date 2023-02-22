import { Form } from "react-router-dom";
// Imported libraries and packages
import { React, useState, props, useEfeect, index, setState, Switch, handlechange, useEffect, useContext, useRef, onChange } from 'react';
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, LaptopOutlined, NotificationOutlined, HomeOutlined, CalendarOutlined, ApartmentOutlined, ReconciliationOutlined, HistoryOutlined, InfoCircleOutlined, TwitterOutlined, DotChartOutlined, UserOutlined, LikeOutlined, ShareAltOutlined, NotificationTwoTone, LikeTwoTone, SkinTwoTone, EnvironmentTwoTone, RocketTwoTone, IdcardTwoTone, ClockCircleOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Typography, Menu, theme, Button, Radio, Carousel, Timeline, Image, Badge, Calendar, Drawer, Card, Col, Row, Statistic, ConfigProvider, InputNumber, Popconfirm, Table, Input, List, TabPanePropse, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useHistory, useLocation, BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import { SmileOutlined, MenuOutlined, PlayCircleFilled } from '@ant-design/icons';
import { Plot, Pie, BidirectionalBar, Column, Line, Area, Gauge, RingProgress, Liquid, Bullet, Treemap, DualAxes } from '@ant-design/plots';
import { Component, LinkButton } from 'react';
import { withRouter,  } from 'react-router';
import PropTypes from 'prop-types';
import './Home.css';
import Root from './root';
import ErrorPage from '../error-page'; 
 

  
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};






const DemoColumn = () => {
  const data = [
    {
      type: '2017',
      sales: 102,
    },
    {
      type: '2018',
      sales: 307,
    },
    {
      type: '2019',
      sales: 483,
    },
    {
      type: '2020',
      sales: 540,
    },
    {
      type: '2021',
      sales: 614,
    },
    {
      type: '2022',
      sales: 795,
    },
    {
      type: '2023',
      sales: 1038,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // Can be manually configured label data tag position
      // 'top', 'bottom', 'middle',
      // Configuration style
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'data',
      },
      sales: {
        alias: 'Akt. Cilv. Daudz.',
      },
    },
  };
  return <Column {...config} />;
};
const DemoPie = () => {
  const data = [
    {
      type: 'Apmierinati ar pulcinu',
      value: 90,
    },
    {
      type: ' ',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      color: 'red',
      offset: '-8%',
      content: '{name}',
      style: {
        fontSize: 25,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    pieStyle: {
      lineWidth: 5,
    },
  };
  return <Pie {...config} />;
};
const DemoLiquid = () => {
  const config = {
    percent: 0.85,
    shape: function (x, y, width, height) {
      const r = width / 4;
      const dx = x - width / 2;
      const dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 4,
      distance: 4,
      style: {
        stroke: '#1677ff',
        strokeOpacity: 1,
      },
    },
    wave: {
      length: 128,
    },
    theme: {
      styleSheet: {
        brandColor: '#bfd838',
      },
    },
  };
  return <Liquid {...config} />;
};
const DemoBullet = () => {
  const data = [
    {
      title: 'Pasniedzēji',
      ranges: [ ],
      measures: [35],
      target: 40,
    },
  ];
  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#c1d93f',
      target: '#3D76DD',
    },
    xAxis: {
      line: null,
    },
    yAxis: {
      tickMethod: ({ max }) => {
        const interval = Math.ceil(max / 5);
        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      },
    },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'counselAmount',
          name: '35',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'counselTarget ',
          name: '40',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};
const DemoTreemap = () => {
  const data = {
    name: 'root',
    children: [
      {
        name: 'Latvija',
        value: 614,
      },
      {
        name: 'Lietuva',
        value: 202,
      },
      {
        name: 'Igaunija',
        value: 138,
      },
      {
        name: 'Zviedrija',
        value: 60,
      }, 
      {
        name: 'Polija',
        value: 20,
      },
      {
        name: 'Vācija',
        value: 4,
      },
    ],
  };
  const config = {
    data,
    colorField: 'name',
  };
  return <Treemap {...config} />;
};
const DemoDualAxes = () => {
  const data = [
    {
      year: '2018',
      Skaits: 0,
    },
    {
      year: '2019',
      Skaits: 1,
    },
    {
      year: '2020',
      Skaits: 1,
    },
    {
      year: '2021',
      Skaits: 2,
    },
    {
      year: '2022',
      Skaits: 4,
    },
    {
      year: '2023',
      Skaits: 5,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['Skaits', ' '],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#ffffff',
      },
    ],
  };
  return <DualAxes {...config} />;
};






export default class PulcinuAnalize extends Component {
    render() {
    
    return (
     <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} style={{ fontSize: 18 }}>
            <Menu.Item key='1'><a href={`/Sakums`}><HomeFilled/> Sākums</a></Menu.Item>
            <Menu.Item key='2'><a href={`/Jaunumi`}><NotificationFilled/> Jaunumi</a></Menu.Item>
            <SubMenu key='sub1' title={<span>Vairāk Par Pulciņiem</span>}>
              <Menu.Item key='3'><a href={`/Plans`}><CalendarFilled/> Plāns</a></Menu.Item>
              <Menu.Item key='4'><a href={`/Analize`}><FundFilled/> Analīze</a></Menu.Item>
              <Menu.Item key='5'><a href={`/Saraksts`}><SnippetsFilled/> Saraksts</a></Menu.Item>
              <Menu.Item key='6'><a href={`/Vesture`}><HourglassFilled/> Vēsture</a></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Analīze</Header>
          <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
            <Breadcrumb.Item href="PulcinuPlans">
              <HomeOutlined style={{ fontSize: 15}}/>
              <span>Sakums</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="Analīze">
              <span>Analīze</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="mainContent">
            <div className="pageStyling">{this.props.children}
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={false} >
                    <Statistic title="Aktīvi pulciņa apmeklētāji" value={1038} prefix={<SkinTwoTone />}/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <Statistic title="Cilvēki apmierināti ar pulciņa apmeklējumu" value={823} prefix={<LikeTwoTone />}/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <Statistic title="Cilvēku mūs izplatījuši citiem" value={851} prefix={<NotificationTwoTone />}/>
                  </Card>
                </Col>
              </Row>
              <Row style={{marginTop: 20}}>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoColumn/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoPie/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoLiquid/>
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{marginTop: 25}}>
                <Col span={8}>
                  <Card bordered={false} >
                    <Statistic title="Pulciņa vadītāji" value={35} prefix={<IdcardTwoTone />}/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <Statistic title="Aktīvo pulciņu dalībnieku skaits ārvalstīs un Latvijā" value={5} prefix={<EnvironmentTwoTone />}/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <Statistic title="Mūsu sponsori" value={5} prefix={<RocketTwoTone />}/>
                  </Card>
                </Col>
              </Row>
              <Row style={{marginTop: 20}}>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoBullet/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoTreemap/>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={false}>
                    <DemoDualAxes/>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design  </Footer>
        </Layout>
      </Layout> 
    );
  };
};