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





const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'success',
          content: 'Nakosais pulcins notiek 08.09.2023 Plkst. 18:00',
        },
        {
          type: 'error',
          content: 'Pulcinu laiks atcelas.',
        }
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'Visi mentori brauc uz Ventspili, attalinatie pulcini nenotiek',
        },
        {
          type: 'success',
          content: 'Datums: 10.02.2023 - Izbrauciens uz Ventspili',
        }
      ];
      break;
      case 26:
        listData = [
          {
            type: 'success',
            content: 'Datums: 26.02.2023 - Pulcinu sakums plkst. 16:00 ',
          }
        ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'Laikapstaku del visi pulcini sodien atcelas',
        },
        {
          type: 'success',
          content: 'Attalinatas nodarbibas sakas plkst.: 20:00',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};






export default class PulcinuPlans extends Component {
  render() {
    const monthCellRender = (value) => {
      const num = getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
    };
    const dateCellRender = (value) => {
      const listData = getListData(value);
      return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
     );
    };    

  return (
   <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }}>
        <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['3']} style={{ fontSize: 18 }}>
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
       <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Plāns</Header>
        <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
          <Breadcrumb.Item href="PulcinuPlans">
            <HomeOutlined style={{ fontSize: 15}}/>
            <span>Sakums</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="Plans">
            <span>Plāns</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content className="mainContent">
          <div className="pageStyling">{this.props.children}
           <div className="pageContent">{this.props.children}
              <h1 className="pageTitle">Pulcinu laiki un datumi</h1>
              <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} style={{padding: 30, borderWidth: 3, borderColor: '#c0dc3c', borderStyle: 'solid', borderRadius: 10, marginBottom: 15}}/>
            </div> 
          </div>
        </Content>
        <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design  </Footer>
      </Layout>
    </Layout> 
  );
};
};