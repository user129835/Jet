// Imported libraries and packages
import { HomeFilled, NotificationFilled, CalendarFilled, FundFilled, SnippetsFilled, HourglassFilled, LaptopOutlined, NotificationOutlined, HomeOutlined, CalendarOutlined, ApartmentOutlined, ReconciliationOutlined, HistoryOutlined, InfoCircleOutlined, TwitterOutlined, DotChartOutlined, UserOutlined, LikeOutlined, ShareAltOutlined, NotificationTwoTone, LikeTwoTone, SkinTwoTone, EnvironmentTwoTone, RocketTwoTone, IdcardTwoTone, ClockCircleOutlined} from '@ant-design/icons';
import { Table, Divider, Select, SelectProps, Space, Checkbox,Tag, Breadcrumb, Layout, Form, Typography, Menu, theme, Button, Radio, Carousel, Timeline, Image, Badge, Calendar, Drawer, Card, Col, Row, Statistic, ConfigProvider, InputNumber, Popconfirm, Input, List } from 'antd';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation, BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import { SmileOutlined, MenuOutlined, PlayCircleFilled } from '@ant-design/icons';
// import { withRouter,  } from 'react-router';
import PropTypes from 'prop-types';
import './Home.css';
import Root from './root';
import ErrorPage from '../error-page';  
import React, { useRef, useState } from 'react';
import PulcinuAnalize from "./Analysis";
import type { FormInstance } from 'antd/es/form';


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









const { Option } = Select;
const EditableContext = React.createContext<FormInstance<any> | null>(null);


interface Item {
  key: string;
  name: string;
  age: number;
  price: string;
  address: string;
  tags: string[];
  date: string;
  NoTimes: number;
}
interface EditableRowProps {
  key: number;
}
const originData: Item[] = [];
  for (let i = 0; i < 1; i++) {
    originData.push({
      key: '1',
      //id: 1,
      name: `Tehnoloģiju Sākums`,
      tags: ['Aktīvs'],
      age: 32,
      price: '3',
      address: '30',
      date: '2023-03-03 03:23:15',
      NoTimes: 3,
    });
    originData.push({
      key: '2',
      //id: 2,
      name: `Tehnoloģija un tās vēsture`,
      tags: ['Aktīvs'],
      age: 32,
      price: '3',
      address: `36`,
      date: '2023-03-04 12:32:13',
      NoTimes: 3,
    });
    originData.push({
      key: '3',
      //id: 3,
      name: `Robotika I (C++, Java)`,
      tags: ['Aktīvs'],
      age: 32,
      price: '5',
      address: `90`,
      date: '2023-03-11 07:57:32',
      NoTimes: 1,
    });
    originData.push({
      key: '4',
      name: `Robotika II (C++, Fortran)`,
      tags: ['Aktīvs'],
      age: 32,
      price: '10',
      address: `70`,
      date: '2023-03-13 10:46:59',
      NoTimes: 1,
    });
    originData.push({
      key: '5',
      name: `Robotika III (C++, Arduino, IDE) `,
      tags: ['Neaktīvs'],
      age: 32,
      price: '10',
      address: `60`,
      date: '2023-03-15 01:04:33',
      NoTimes: 1,
    });
    originData.push({
      key: '6',
      name: `Back-End Pilnīgajam iesācējam I`,
      tags: ['Aktīvs'],
      age: 32,
      price: '5',
      address: `95`,
      date: '2023-03-16 08:00:42',
      NoTimes: 1,
    });
    originData.push({
      key: '7',
      name: `Pastaiga ar robot-suni `,
      tags: ['Aktīvs'],
      age: 32,
      price: '0',
      address: `0`,
      date: '2023-03-18 20:21:33',
      NoTimes: 2,
    });
    originData.push({
      key: '8',
      name: `Back-End pilnīgajam iesācējam II `,
      tags: ['Neaktīvs'],
      age: 32,
      price: '10',
      address: `170`,
      date: '2023-04-03 15:55:38',
      NoTimes: 1,
    });
    originData.push({
      key: '9',
      name: `Advancētā Robotika I `,
      tags: ['Aktīvs'],
      age: 32,
      price: '30',
      address: `210`,
      date: '2023-04-08 22:07:40',
      NoTimes: 1,
    });
    originData.push({
      key: '10',
      name: `Advancētā Robotika II `,
      tags: ['Neaktīvs'],
      age: 32,
      price: '35',
      address: `175`,
      date: '2023-04-11 04:24:08',
      NoTimes: 1,
    });
  };
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Lūdzu aizpildiet lauku ${title}!`,
            },
          ]}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const Saraksts: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({  name: '', age: '', price: '', address: '', tags: '', date: '', NoTimes: '', ...record });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      title: 'Nosaukums',
      dataIndex: 'name',
      tags: ['Aktīvs', 'Neaktīvs'],
      width: '22%',
      editable: true,
    },
    {
      title: 'Status',
      key: 'tags',
      width: '6%',
      editable: true,
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'green' : 'red';
            if (tag === 'Aktīvs') {
              color = 'green';
            } else {
              color = 'red';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Maksa (€)',
      dataIndex: 'price',
      key: 'price',
      width: '8%',
      editable: true,
    },
    {
      title: 'Nopelnīts (€)',
      dataIndex: 'address',
      key: 'address',
      width: '9%',
      editable: true,
    },
    { 
      title: 'Sākuma datums',
      dataIndex: 'date',
      key: 'date',
      width: '12%',
      editable: true,
    },
    {
      title: 'Reizes',
      dataIndex: 'NoTimes',
      width: '6%',
      editable: true,
    },
    {
      title: 'Pasniedzēji',
      dataIndex: 'counselors',
      width: '27%',
      editable: true,
      render(){
        return(
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="izvēlēties pasniedzēju"
            defaultValue={['Joe']}
            onChange={handleChange}
            optionLabelProp="label">
            <Option value="olivers" label="Olivers">
              <Space>
                Olivers
              </Space>
            </Option>
            <Option value="roberts" label="Roberts">
              <Space>
                Roberts
              </Space>
            </Option>
            <Option value="marks" label="Marks">
              <Space>
                Marks
              </Space>
            </Option>
            <Option value="ralfs" label="Ralfs">
              <Space>
                Ralfs
              </Space>
            </Option>
            <Option value="tomass" label="Tomass">
              <Space>
                Tomass
              </Space>
            </Option>
            <Option value="reinis" label="Reinis">
              <Space>
                Reinis
              </Space>
            </Option>
            <Option value="kristaps" label="Kristaps">
              <Space>
                Kristaps
              </Space>
            </Option>
            <Option value="patriks" label="Patriks">
              <Space>
                Patriks
              </Space>
            </Option>
            <Option value="sofija" label="Sofija">
              <Space>
                Sofija
              </Space>
            </Option>
            <Option value="alise" label="Alise">
              <Space>
                Alise
              </Space>
            </Option>
            <Option value="elza" label="Elza">
              <Space>
                Elza
              </Space>
            </Option>
            <Option value="eva" label="Eva">
              <Space>
                Eva
              </Space>
            </Option>
            <Option value="nora" label="Nora">
              <Space>
                Nora
              </Space>
            </Option>
            <Option value="evelina" label="Evelina">
              <Space>
                Evelīna
              </Space>
            </Option>
            <Option value="ieva" label="Ieva">
              <Space>
                Ieva
              </Space>
            </Option>
            <Option value="elina" label="Elina">
              <Space>
                Elīna
              </Space>
            </Option>
          </Select>


          /*<Space style={{ width: '100%' }} direction="vertical">
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Izvēlēties pasniedzēju"
              defaultValue={['Olivers', 'Roberts', 'Madara', 'Santa', 'Rainers', 'Patriks', 'Samanta']}
              onChange={handleChange}
              options={options}
            />
          </Space>*/
        )
      }
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Saglabāt
            </Typography.Link>
            <Popconfirm title="Vēlaties atcelt darbību?" onConfirm={cancel}>
              <a>Atcelt</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Labot
            </Typography.Link><br/>
            <Popconfirm title="Sure to delete?" /*onConfirm={() => handleDelete(record.key)}*/>
              <a>Dzēst ierakstu</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  const columnss = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };



  return (
      <Layout>
          <Sider width={256} style={{ minHeight: '100vh' }}>
            <img src={require('./camp-logo.png')} alt="" style={{ height: '170px', marginLeft: 10, marginBottom: 8, marginTop: 12, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} />
            <Menu theme='dark' mode='inline' defaultSelectedKeys={['5']} style={{ fontSize: 19 }}>
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
            <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 40}}>Saraksts</Header>
            <Breadcrumb style={{ marginTop: 12, marginBottom: -12, marginLeft: 25, fontSize: 15}}>
              <Breadcrumb.Item href="Sakums">
                <HomeOutlined style={{ fontSize: 15}}/>
                <span>Sākums</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="Saraksts">
                <span>Saraksts</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content className="mainContent">
              <div className="pageStyling">
                <h1 className="pageTitle">CAMP TECH pulciņa saraksts </h1>
                <div className="pageContent">
                  <Button /*onClick={handleAdd}*/ type="primary" className='listbtn' >Pievienot</Button>
                  <Form form={form} component={false}>
                    <Table
                      components={{
                        body: {
                          cell: EditableCell,
                        },
                      }}
                      bordered
                      dataSource={data}
                      columns={columnss}
                      rowClassName="editable-row"
                      pagination={{
                        onChange: cancel,
                      }}/>
                </Form> 
                </div>
              </div>
            </Content>
            <Footer className="mainFooter">TECH CAMP ©2023 Made with Ant Design </Footer>
          </Layout>
        </Layout> 
      );
};

export default Saraksts;