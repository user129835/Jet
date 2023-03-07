import { React } from 'react';
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Badge, Calendar } from 'antd';
import { Component } from 'react';
import './Components/styling/Plan.css';
import Footer from "./Components/footer.js";
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
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
        <Sider className='saider' width={256}>
          <img className='menu__logo' src={require('./camp-logo.png')} alt=""/>
          <Menu className='mainu' theme='dark' mode='inline' defaultSelectedKeys={['3']}>
            <Menu.Item key='1'><a href={`/Home`}><HomeFilled/> Sākums</a></Menu.Item>
            <Menu.Item key='2'><a href={`/News`}><NotificationFilled/> Jaunumi</a></Menu.Item>
            <SubMenu key='sub1' title={<span>Vairāk Par Pulciņiem</span>}>
              <Menu.Item key='3'><a href={`/Plans`}><CalendarFilled/> Plāns</a></Menu.Item>
              <Menu.Item key='4'><a href={`/Analysis`}><FundFilled/> Analīze</a></Menu.Item>
              <Menu.Item key='5'><a href={`/List`}><SnippetsFilled/> Saraksts</a></Menu.Item>
              <Menu.Item key='6'><a href={`/History`}><HourglassFilled/> Vēsture</a></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        <Header className='heed'>Pulcinu laiki un datumi</Header>
          <Breadcrumb className='bread'>
            <Breadcrumb.Item href="Home">
              <HomeOutlined className='bread__icon'/>
              <span>Sakums</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="Plans">
              <span>Plāns</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="mainContent">
            <div className="pageStyling">{this.props.children}
            <div className="pageContent">{this.props.children}
                <Calendar className='calendar' dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
              </div> 
            </div>
          </Content>
          <Footer/>
        </Layout>
      </Layout> 
    );
};
};