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
 




// Variable declaration 
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







export default class PulcinuVesture extends Component {
    render() {
    
    return (
     <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['6']} style={{ fontSize: 18 }}>
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
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Vēsture</Header>
          <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
            <Breadcrumb.Item href="PulcinuPlans">
              <HomeOutlined style={{ fontSize: 15}}/>
              <span>Sakums</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="Vesture">
              <span>Vēsture</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="mainContent">
            <div className="pageStyling">{this.props.children}
            <h1 className="pageTitle">IT Pulciņa - "CAMP TECH" Vēsture</h1>
              <p className="pageParagraphVesture">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      children: '2017-02-12\nIzveidots CAMP TECH IT Pulciņš',
                      color: 'green',
                    },
                    {
                      children: '2017-07-01\nPirmā vasaras pulciņa atklāšana',
                      color: 'blue',
                    },
                    {
                      children: '2018-02-13\nCAMP TECH iegūst pirmo sponsoru',
                      color: 'blue',
                    },
                    {
                      children: '2018-05-23\nCAMP TECH Sasniedz 100 pulciņa dalībniekus',
                      color: 'blue',
                    },
                    {
                      children: '2018-11-31\nCAMP TECH Dodas pirmajā ziemas ekskursijā',
                      color: 'blue',
                    },
                    {
                      children: '2019-07-17\nCAMP TECH Sasniedz 250 dalībnieku lielu skaitu',
                      color: 'blue',
                    },
                    {
                      children: '2020-03-05\nCAMP TECH Sasniedz jaunu rekordu grupas ekskursijās',
                      color: 'blue',
                    },
                    {
                      children: '2020-06-01\nCovid-19 Dēļ CAMP TECH Pārtrauc tiešās nodarbības uz neilgu brīdi',
                      color: 'red',
                    },
                    {
                      dot: (
                        <ClockCircleOutlined
                          style={{
                            fontSize: '16px',
                          }}
                        />
                      ),
                      children: '2020-06-17\nCAMP TECH Pāriet uz attālinātām nodarbībām',
                      color: 'blue',
                    },
                    {
                      children: '2021-01-17\nNeskatoties uz mēnešu ilgām attālinātām nodarbībām, CAMP TECH iegūst jaunu sponsoru',
                      color: 'blue',
                    }, 
                    {
                      children: '2021-06-01\nDrošības noteikumu un sejas masku vilkšanu ievērojot, CAMP TECH atsāk vasaras tiešās nodarbības pēc gadu ilgas pauzes ',
                      color: 'blue',
                    },
                    {
                      children: '2021-11-01\nCAMP TECH Sasniedz 300 lielu pulciņu apmeklētāju skaitu no ārvalstīm ',
                      color: 'blue',
                    },
                    {
                      children: '2022-01-26\nCAMP TECH Iegūst divus ārvalstu jaunatnes organizācijas beidrības sponsorus ',
                      color: 'blue',
                    },
                    {
                      children: '2022-05-30\nAr lielu, spējīgu un motivētu komandu, CAMP TECH dodas uz Eiropas jaunatnes vasaras nometnes sacensībām Spānijā ',
                      color: 'blue',
                    },
                    {
                      children: '2022-10-30\nCAMP TECH Uzvar Eiropas rudens bilžu kolāžas sacensībās',
                      color: 'blue',
                    },
                    {
                      children: '2023-01-05\nAr lielu piepūli un godāmību, CAMP TECH saņem attalgojumu no Latvijas Valsts jaunatnes biedrības un Valsts prezidenta par Latvijas #1 IT pulcinu.',
                      color: 'green',
                    },
                  ]}/>
            </div>
          </Content>
          <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design  </Footer>
        </Layout>
      </Layout> 
    );
  };
};