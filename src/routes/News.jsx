import { React } from 'react';
import { HomeOutlined, HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled } from '@ant-design/icons';
import { Breadcrumb, Badge, Layout, Menu, Carousel, Card, Col, Row } from 'antd';
import { Component } from 'react';
import Footer from "./Components/footer.js";
import SideMenu from './Components/SiderMenu.jsx';
import './Components/styling/News.css';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
export default class Jaunumi extends Component {
  render() {
    return (
      <Layout>
          <SideMenu/> 
          <Layout>
            <Header className='heed'>Jaunumi</Header>
            <Breadcrumb className='bread'>
              <Breadcrumb.Item href="Home">
                <HomeOutlined className='bread__icon'/>
                <span>Sākums</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="News">
                <span>Jaunumi</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content className="mainContent">
              <div className="pageStyling">{this.props.children}
                <div className="pageContent">
                  <Row gutter={24} >
                    <Col span={13} >
                      <Badge.Ribbon text="Ūdens">
                        <Card className='card-title' title="IT pulciņš dodas izbraucienā ar laivu ⛵" bordered={false} >
                            <Carousel>
                              <div>
                                <img className='watmark__logo' src={require('./camp-logo.png')} alt="watermark on images" />
                                <img className='water1' alt="jura" src="https://www.visitnewportbeach.com/wp-content/uploads/2019/07/endless-sun-surf-700x400.jpg"/>
                              </div>
                              <div>
                                <img className='watmark__logo' src={require('./camp-logo.png')} alt="watermark on images" />
                                <img className='water2' alt="jura" src="https://www.gobroadreach.com/wp-content/uploads/2022/12/SXMI-LP-Carousel-Images-800x470.jpg" />
                              </div>
                              <div>
                                <img className='watmark__logo' src={require('./camp-logo.png')} alt="watermark on images" />
                                <img className='water3' alt="jura" src="https://www.ambergristoday.com/sites/default/files/archivedimages/news/2018/07/30/junior-open-water-divers-kids-in-action-01.jpg"/>
                              </div>
                              <p>Mūsu vasaras akvalangu programmas ir piemērotas jebkura pieredzes līmeņa pusaudžiem. Visus mūsu piedzīvojumus ar akvalangu vada augsti kvalificēti niršanas instruktori, kuriem ir pieredze darbā ar pamatskolas un vidusskolas vecuma nirējiem. Neliels grupu lielums nodrošina individuālu uzmanību un norādījumus, palīdzot studentiem gūt maksimālu labumu no pieredzes. Pieredzējuši pusaudžu nirēji var izpētīt dažas no visievērojamākajām niršanas vietām uz planētas</p>
                            </Carousel>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                    <Col span={11}>
                      <Badge.Ribbon text="Ūdens">
                        <Card className='card-title' title="Sērfojam ar Wakeboard Beberliņos 🏄" bordered={false}>
                          <Carousel>
                            <div>
                              <img className='watmark__logo2' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='water4' alt="wakeboarding" src="https://i.imgur.com/4B939Ui.jpeg"/>
                            </div>
                            <div>
                              <img className='watmark__logo2' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='water5' alt="wakeboarding" src="https://assets.geradovana.lt/files/uploaded/programs/28849d763ba340a4a183a1948f6e6774.jpeg" />
                            </div>
                            <p>Veikbords ātri ir kļuvis par vienu no populārākajām aktivitātēm CAMP TECH pulciņā. Visu līmeņu pulciņa apmeklētāji var izbaudīt veikbordu BB wakepark parkā. Veikborda klasē apmeklētājiem ir iespēja nodarboties arī ar slalomu un ūdensslēpēm.</p>
                          </Carousel>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                    <Col className='news__col' span={11}>
                      <Badge.Ribbon text="Pārgājiens" color="black">
                        <Card className='card-title' title="Dodamies pārgājienos 🏕️" bordered={false}>
                          <Carousel>
                            <div>
                              <img className='watmark__logo2' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='nature1' alt="nature" src="https://drifttravel.com/wp-content/uploads/2021/01/pexels-snapwire-699558-1-1.jpg"/>
                            </div>
                            <div>
                              <img className='watmark__logo2' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='nature2' alt="nature" src="https://www.fluentu.com/blog/educator-english/wp-content/uploads/sites/13/2016/04/esl-summer-camp-activities.jpg"/>
                            </div>
                            <p>Kad ar ainavu vien pietiek, lai izbaudītu relaksējošu kempinga braucienu mežā, aktivitātes, ko varat darīt, ir lielisks papildinājums! Ja vēlaties izbaudīt uz fizisko labsajūtu vērstas aktivitātes, varat doties pārgājienā, meklējot savvaļas dzīvniekus! Meži ir mājvieta dažādu veidu putniem, tāpēc putnu vērošana var būt aizraujoša nodarbe. Atalgojums arī tad, ja mācāties vai zināt dažādus veidus! Doties ar velosipēdu pa meža takām, toties esat uzmanīgs, ja izvēlaties doties ārpus tām, pārliecinieties, ka vienmēr esat kopā, kurš zina ārpus taku ceļus!</p>
                          </Carousel>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                    <Col className='news__col' span={13}>
                      <Badge.Ribbon text="Sports" color="green">
                        <Card className='card-title' title="Sportojam 🤸" bordered={false}>
                          <Carousel>
                            <div>
                              <img className='watmark__logo' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='sports1' alt="sports" src="https://kidsstoppress.com/wp-content/uploads/2021/09/1555495807.BestSportsSummerCampInIndia-Kidsstoppress-1.jpg"/>
                            </div>
                            <div>
                              <img className='watmark__logo' src={require('./camp-logo.png')} alt="watermark on images" />
                              <img className='sports2' alt="sports" src="https://www.athleticsireland.ie/downloads/eshop/summer_camp_x.jpg"/>
                            </div>
                            <p>Ja jūsu bērns ir aizrautīgs sportists, kurš patiešām vēlas attīstīt kādu noteiktu prasmi, tad CAMP TECH ir tā nometni. Mēs piedāvājam nometnes intensīvai sporta sagatavošanai un nometnes, kas apvieno iespēju izmēģināt daudz dažādu sporta veidu. Varat arī apvienot sportu ar valodu apguvi un/vai citām aktivitātēm. Kvalificētu treneru vadītie sporta veidi ietver: </p>
                          </Carousel>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                  </Row>
                </div>
              </div>
            </Content>
            <Footer/> 
          </Layout>
        </Layout> 
  );
};
};