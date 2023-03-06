import { React } from 'react';
import { CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, NotificationFilled, HomeOutlined, HomeFilled } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Carousel } from 'antd';
import { Component } from 'react';
import './Home.css';
import Footer from "./Components/footer.js";
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
export default class App extends Component {
    render() {
      return (
        <Layout>
            <Sider className='saider' width={256}>
              <img className='menu__logo' src={require('./camp-logo.png')} alt="" />
              <Menu className='mainu' theme='dark' mode='inline' defaultSelectedKeys={['1']}>
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
              <Header className='heed'>Bildes no mūsu pulciņiem</Header>
              <Breadcrumb className='bread'>
                <Breadcrumb.Item href="Sakums">
                  <HomeOutlined className='bread__icon'/>
                  <span>Sākums</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Content className="mainContent">
                <div className="pageStyling">{this.props.children}
                  <div className="pageContent">
                    <p className="pageParagraphSakums">Tehnoloģija ir pieredze, kas veidota ap jūsu bērnu — viņa interesēm, prasmju līmeni un nākotnes mērķiem. {'\n'}
                      <br/>Mēs veicam inženieriju ar progresīviem projektiem programmatūras un aparatūras kursos, tāpēc nometnes nedēļa ir tikai jūsu mācību sākums, nevis beigas.
                    </p><br/>
                    <Carousel autoplay effect='fade' dots>
                      <div>
                        <img className='hom__image' src='https://thebestcamps.com/camp-admin/camp-images/747-large.jpg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/listings/id-tech-camps/HonAWYI1AP1.jpeg' alt="" />
                      </div>
                      <div>
                        <img className='hom__image' src='https://www.science.org/do/10.1126/science.aav2806/abs/stemscience1.jpeg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://techcamp.aceplora.com/wp-content/uploads/2022/06/In-class-robotics-learners.jpg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://do512family.com/wp-content/uploads/2019/04/1180x660-05.jpg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://www.vdh.virginia.gov/content/uploads/sites/83/2022/07/DSC01107.jpg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://www.internationalsummercampuk.com/media/1016/7-2.jpg?anchor=center&mode=crop&width=1140&height=550&rnd=131317357180000000' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://www.kopernik.org/wp-content/uploads/2022/03/DSC_1679-860x484.jpg' alt=""/>
                      </div>
                      <div>
                        <img className='hom__image' src='https://www.massaudubon.org/var/ezdemo_site/storage/images/site_ma/get-outdoors/wildlife-sanctuaries/blue-hills-trailside-museum/summer-camp/rates-dates/274133-17-eng-US/rates-dates.jpg' alt=""/>
                      </div>
                  </Carousel>
                  </div>
                </div>
              </Content>
              <Footer/>
            </Layout>
          </Layout> 
      );
  };
};