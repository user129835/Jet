// Imported libraries and packages
import { HomeFilled, NotificationFilled, CalendarFilled, DeleteOutlined, FundFilled, SnippetsFilled, HourglassFilled, HomeOutlined } from '@ant-design/icons';
import { Table, DatePicker, Switch, Select, Space, Breadcrumb, Layout, Form, Typography, Menu, Button, InputNumber, Popconfirm, Input } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import React, { useState } from 'react';
import Footer from "./Components/footer.js";
import './List.css';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const { Option } = Select;
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
const originData: Item[] = [];
  for (let i = 0; i < 1; i++) {
    originData.push({
      key: '1',
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
      tags: ['Aktīvs'],
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
      tags: ['Aktīvs'],
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
      tags: ['Aktīvs'],
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
          className='editable__cell'
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
const onChange = (
  value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,
) => {
};
const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
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
  const handleDelete = (key: React.Key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      newData.splice(index, 1);
      setData(newData);
    }
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
  const handleAdd = () => {
    const key = String(Date.now());
    const newData = {
      key,
      name: '',
      age: 0,
      price: '',
      address: '',
      tags: [''],
      date: '',
      NoTimes: 0,
    };
    setData([...data, newData]);
    setEditingKey(key);
  };
  const onChange = (value: number | string) => {
  };
  const columns = [
    {
      title: 'Nosaukums',
      dataIndex: 'name',
      tags: ['Aktīvs', 'Neaktīvs'],
      width: '21%',
      editable: true,
    },
    {
      title: 'Status',
      key: 'tags',
      width: '8%',
      editable: false,
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <div className='space-align-block'>
          <Space direction="vertical" align="center">
            <Switch checkedChildren="Aktīvs" unCheckedChildren="Neaktīvs" defaultChecked />
          </Space>
        </div>
      ),
    },
    {
      title: 'Maksa (€)',
      dataIndex: 'price',
      key: 'price',
      width: '8%',
      editable: true,
      render(){
        return(
          <>
            <InputNumber
              defaultValue={1}
              formatter={(value) => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value!.replace(/\€\s?|(,*)/g, '')}
              onChange={onChange}/>
          </>
        )}
    },
    {
      title: 'Nopelnīts (€)',
      dataIndex: 'address',
      key: 'address',
      width: '9%',
      editable: true,
      render(){
        return(
          <>
            <InputNumber
              defaultValue={1}
              formatter={(value) => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value!.replace(/\€\s?|(,*)/g, '')}
              onChange={onChange}/>
          </>
        )}
    },
    { 
      title: 'Sākuma datums',
      dataIndex: 'date',
      key: 'date',
      width: '14%',
      editable: true,
      render(){
        return(
          <>
            <Space direction="vertical" size={12}>
              <DatePicker showTime onChange={onChange} onOk={onOk} />
            </Space>
          </> 
        )}

    },
    {
      title: 'Reizes',
      dataIndex: 'NoTimes',
      width: '4%',
      editable: true,
      render(){
        return(
          <>
            <InputNumber min={1} max={365} defaultValue={3} />
          </> 
        )}
    },
    {
      title: 'Pasniedzēji',
      dataIndex: 'counselors',
      width: '21%',
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
        )
      }
    },
    {
      title: 'Opcija',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record); 
        return editable ? (
          <span> 
            <Typography.Link className='svebttn' onClick={() => save(record.key)} > 
              Saglabāt
            </Typography.Link>
            <Popconfirm title="Vēlaties atcelt darbību?" onConfirm={cancel}>
              <a>Atcelt</a>
            </Popconfirm>
          </span>
        ) : (
          <Space>
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Labot
          </a>
          <Popconfirm
            title="Vai tiešām vēlaties dzēst šo ierakstu?"
            onConfirm={() => handleDelete(record.key)}>
            <a href="#!" style={{ color: 'red', marginLeft: 5}}>
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </Space>
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
          <Sider className='saider' width={256}>
            <img className='menulogo' src={require('./camp-logo.png')} alt=""/>
            <Menu className='mainu' theme='dark' mode='inline' defaultSelectedKeys={['5']}>
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
            <Header className='heed'>CAMP TECH pulciņa saraksts</Header>
            <Breadcrumb className='bread'>
              <Breadcrumb.Item href="Sakums">
                <HomeOutlined className='bread__icon'/>
                <span>Sākums</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="Saraksts">
                <span>Saraksts</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content className="mainContent">
              <div className="pageStyling">
                <div className="pageContent">
                  <Form form={form} component={false}>
                    <Button className='bttn' onClick={handleAdd} type="primary">
                      Pievienot
                    </Button>
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
            <Footer/>
          </Layout>
        </Layout> 
      );
};
export default Saraksts;
