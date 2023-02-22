import { Form } from "react-router-dom";
// Imported libraries and packages
import { React, useState, props, useEfeect, index, setState, Switch, handlechange, useEffect, useContext, useRef, onChange } from 'react';
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, HomeOutlined, DotChartOutlined, UserOutlined, LikeOutlined, ShareAltOutlined, NotificationTwoTone, LikeTwoTone, SkinTwoTone, EnvironmentTwoTone, RocketTwoTone, IdcardTwoTone, ClockCircleOutlined} from '@ant-design/icons';
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





export default class Jaunumi extends Component {
  render() {
  
  

  return (
   <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }}>
        <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['2']} style={{ fontSize: 18 }}>

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
        <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Jaunumi</Header>
        <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
          <Breadcrumb.Item href="Sakums">
            <HomeOutlined style={{ fontSize: 15}}/>
            <span>Sākums</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="Jaunumi">
            <span>Jaunumi</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content className="mainContent">
          <div className="pageStyling">{this.props.children}
            <h1 className="pageTitle">Bildes no mūsu pulciņiem</h1>
            <div className="pageContent">
              <Row gutter={24} >
                <Col span={13} >
                  <Card className='card-title' title="IT pulcins dodas izbrauciena ar laivu" bordered={false} >
                    <Carousel>
                      <div>
                        <img alt="jura" src="https://www.visitnewportbeach.com/wp-content/uploads/2019/07/endless-sun-surf-700x400.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
                      </div>
                      <div>
                        <img alt="jura" src="https://www.gobroadreach.com/wp-content/uploads/2022/12/SXMI-LP-Carousel-Images-800x470.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}/>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Carousel>
                  </Card>
                </Col>
                <Col span={11}>
                  <Card className='card-title' title="Serfojam ar Wakeboard Beberlinos" bordered={false}>
                    <Carousel>
                      <div>
                        <img alt="wakeboarding" src="https://i.imgur.com/4B939Ui.jpeg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}/>
                      </div>
                      <div>
                        <img alt="wakeboarding" src="https://assets.geradovana.lt/files/uploaded/programs/28849d763ba340a4a183a1948f6e6774.jpeg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}/>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Carousel>
                  </Card>
                </Col>
                <Col span={11} style={{marginTop: 22}}>
                  <Card className='card-title' title="Dodamies celojuma" bordered={false}>
                    <Carousel>
                      <div>
                        <img alt="celojums" src="https://drifttravel.com/wp-content/uploads/2021/01/pexels-snapwire-699558-1-1.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}/>
                      </div>
                      <div>
                        <img alt="celojums" src="https://www.fluentu.com/blog/educator-english/wp-content/uploads/sites/13/2016/04/esl-summer-camp-activities.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}/>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Carousel>
                  </Card>
                </Col>
                <Col span={13} style={{marginTop: 22}}>
                  <Card className='card-title' title="Sportojam" bordered={false}>
                    <Carousel>
                      <div>
                        <img alt="sports" src="https://kidsstoppress.com/wp-content/uploads/2021/09/1555495807.BestSportsSummerCampInIndia-Kidsstoppress-1.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
                      </div>
                      <div>
                        <img alt="sports" src="https://www.athleticsireland.ie/downloads/eshop/summer_camp_x.jpg" style={{ height: '353px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Carousel>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design  </Footer>
      </Layout>
    </Layout> 
  );
};
};












