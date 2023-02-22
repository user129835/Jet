import { Form } from "react-router-dom";
// Imported libraries and packages
import { React, useState, props, useEfeect, index, setState, Switch, handlechange, useEffect, useContext, useRef, onChange } from 'react';
import { LaptopOutlined, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, NotificationFilled, HomeOutlined, HomeFilled, CalendarFill, ApartmentOutlined, ReconciliationOutlined, HistoryOutlined, InfoCircleOutlined, TwitterOutlined, DotChartOutlined, UserOutlined, LikeOutlined, ShareAltOutlined, NotificationTwoTone, LikeTwoTone, SkinTwoTone, EnvironmentTwoTone, RocketTwoTone, IdcardTwoTone, ClockCircleOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Typography, Menu, theme, Button, Radio, Carousel, Timeline, Image, Badge, Calendar, Drawer, Card, Col, Row, Statistic, ConfigProvider, InputNumber, Popconfirm, Table, Input, List, TabPanePropse, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useHistory, useLocation, BrowserRouter, createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { SmileOutlined, MenuOutlined, PlayCircleFilled } from '@ant-design/icons';
import { Plot, Pie, BidirectionalBar, Column, Line, Area, Gauge, RingProgress, Liquid, Bullet, Treemap, DualAxes } from '@ant-design/plots';
import { Component, LinkButton } from 'react';
import { withRouter,  } from 'react-router';
import PropTypes from 'prop-types';
import './Home.css';
import Root, { loader as rootLoader } from './root';
import ErrorPage from '../error-page';
import Jaunumi from './News';
import Plans from "./Plans";
import Analize from "./Analysis";
import Saraksts from "./List.tsx";
import Vesture from "./History";





// Variable declaration 
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Title } = Typography;


// Code for Graphs, Pie's, Charts and Statistics
/* Data for the calendar */
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'success',
          content: 'Nākošais pulciņš notiek 08.09.2023 Plkst. 18:00',
        },
        {
          type: 'error',
          content: 'Pulciņu laiks atceļas.',
        }
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'Visi mentori brauc uz Ventspili, attālinātie pulciņi nenotiek',
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
            content: 'Datums: 26.02.2023 - Pulciņu sākums plkst. 16:00 ',
          }
        ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'Laikapstākļu dēļ visi pulciņi šodien atceļas',
        },
        {
          type: 'success',
          content: 'Attālinātās nodarbības sākās plkst.: 20:00',
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
      type: 'Apmierināti ar mūsu pulciņu',
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
      title: ' ',
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





const items2 = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="./Jaunumi">
        Jaunumi
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="./Saraksts">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="./Vesture">
        Navigation
      </a>
    ),
  },
];


export default class App extends Component {
    render() {

    

    return (
     <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 19 }}>
            <Menu.Item key='1'><a href={`/Sakums`}><HomeFilled/> Sākums</a></Menu.Item>
            <Menu.Item key='2'><a href={`/Jaunumi`}><NotificationFilled/> Jaunumi</a></Menu.Item>
            <SubMenu key='sub1' title={<span> Vairāk Par Pulciņu</span>}>
              <Menu.Item key='3'><a href={`/Plans`}><CalendarFilled/> Plāns</a></Menu.Item>
              <Menu.Item key='4'><a href={`/Analize`}><FundFilled/> Analīze</a></Menu.Item>
              <Menu.Item key='5'><a href={`/Saraksts`}><SnippetsFilled/> Saraksts</a></Menu.Item>
              <Menu.Item key='6'><a href={`/Vesture`}><HourglassFilled/> Vēsture</a></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Sākums</Header>
          <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
            <Breadcrumb.Item href="Sakums">
              <HomeOutlined style={{ fontSize: 15}}/>
              <span>Sākums</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="mainContent">
            <div className="pageStyling">{this.props.children}
              <h1 className="pageTitle">Bildes no mūsu pulciņiem</h1>
              <div className="pageContent">
                <p className="pageParagraphSakums">Tehnoloģija ir pieredze, kas veidota ap jūsu bērnu — viņa interesēm, prasmju līmeni, nākotnes mērķiem. {'\n'}
                  <br/>Mēs veicam inženieriju ar progresīviem projektiem programmatūras un aparatūras kursos, tāpēc nometnes nedēļa ir tikai jūsu mācību sākums, nevis beigas.
                </p><br/>
                <Carousel autoplay effect='fade' dots>
                  <div>
                    <img src='https://thebestcamps.com/camp-admin/camp-images/747-large.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/listings/id-tech-camps/HonAWYI1AP1.jpeg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://www.science.org/do/10.1126/science.aav2806/abs/stemscience1.jpeg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://techcamp.aceplora.com/wp-content/uploads/2022/06/In-class-robotics-learners.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://do512family.com/wp-content/uploads/2019/04/1180x660-05.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://www.vdh.virginia.gov/content/uploads/sites/83/2022/07/DSC01107.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://www.internationalsummercampuk.com/media/1016/7-2.jpg?anchor=center&mode=crop&width=1140&height=550&rnd=131317357180000000' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://www.kopernik.org/wp-content/uploads/2022/03/DSC_1679-860x484.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
                  <div>
                    <img src='https://www.massaudubon.org/var/ezdemo_site/storage/images/site_ma/get-outdoors/wildlife-sanctuaries/blue-hills-trailside-museum/summer-camp/rates-dates/274133-17-eng-US/rates-dates.jpg' alt="" style={{ height: 700, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}/>
                  </div>
              </Carousel>
              </div>
            </div>
          </Content>
          <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design </Footer>
        </Layout>
      </Layout> 
    );
  };
};

