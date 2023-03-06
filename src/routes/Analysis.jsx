// Imported libraries and packages
import { React } from 'react';
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, HomeOutlined, NotificationTwoTone, LikeTwoTone, SkinTwoTone, EnvironmentTwoTone, RocketTwoTone, IdcardTwoTone } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card, Col, Row, Statistic } from 'antd';
import {DemoColumn, DemoPie, DemoLiquid, DemoBullet, DemoTreemap, DemoDualAxes} from "./Components/AnalysisData/Data.js";
import { Component } from 'react';
import Footer from "./Components/footer.js";
import './Analysis.css';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
export default class PulcinuAnalize extends Component {
    render() { 
      return (
        <Layout>
            <Sider className='saider' width={256}>
              <img className='menu__logo' src={require('./camp-logo.png')} alt=""/>
              <Menu className='mainu' theme='dark' mode='inline' defaultSelectedKeys={['4']}>
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
              <Header className='heed'>Analīze</Header>
              <Breadcrumb className='bread'>
                <Breadcrumb.Item href="Sakums">
                  <HomeOutlined className='bread__icon'/>
                  <span>Sakums</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="Analize">
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
                  <Row className='data__card'>
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
                  <Row className='data__card' gutter={16}>
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
                  <Row className='rowie'>
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
              <Footer/>
            </Layout>
          </Layout> 
      );
  };
};