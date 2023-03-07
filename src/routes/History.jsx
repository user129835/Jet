// Imported libraries and packages
import { React } from 'react';
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, HomeOutlined, ClockCircleOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Timeline } from 'antd';
import { Component } from 'react';
import Footer from "./Components/footer.js";
import './Components/styling/History.css';
// Variable declaration 
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
// Main page content
export default class PulcinuVesture extends Component {
    render() {
    return (
     <Layout>
        <Sider className='saider' width={256}>
          <img className='menu__logo' src={require('./camp-logo.png')} alt=""/>
          <Menu className='mainu' theme='dark' mode='inline' defaultSelectedKeys={['6']}>
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
          <Header className='heed'>IT Pulciņa - "CAMP TECH" Vēsture</Header>
          <Breadcrumb className='bread'>
            <Breadcrumb.Item href="Home">
              <HomeOutlined className='bread__icon'/>
              <span>Sakums</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="History">
              <span>Vēsture</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="mainContent">
            <div className="pageStyling">{this.props.children}
              <p className="pageParagraphVesture">Vairāk kā 6 gadus cilvēki ir uzticējušies CAMP TECH nometnēm, lai nodrošinātu saviem bērniem drošu un jautru vidi. Nometnes pasniedzēji ir sertificēti un gatavi vadīt nometnes dalībniekus dažādās sezonās. Katrai nometnei ir savas unikālās tradīcijas, lai arī kur jūs nonāktu, jūs sekosit pa aizraujošām vasaras pēdām CAMP TECH pulciņā.</p><br/>
                <Timeline
                  mode="alternate"
                  items={[
                    { 
                      dot:(
                        <img className='history__logo' alt="jura" src={require('./camp-logo.png')}/>
                      ),
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
                          className='history__icon'
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
          <Footer/>
        </Layout>
      </Layout> 
    );
  };
};