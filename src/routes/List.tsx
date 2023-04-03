// Imported libraries and packages
import { Table, message, Radio, TreeSelect, Switch, InputNumber, DatePicker, Space, Breadcrumb, Modal, Select, Layout, Form, Menu, Button, Input } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { HomeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import SideMenu from './Components/SiderMenu.jsx';
import Footer from "./Components/footer.js";
import './Components/styling/List.css';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const { Option } = Select;
const EditableContext = React.createContext(null);
const Saraksts = () => {
  const columns = [
    {
      title: 'Nosaukums',
      dataIndex: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Maksa (€)',
      dataIndex: 'price',
    }, 
    {
      title: 'Nopelnīts (€)',
      dataIndex: 'earn',
    },
    {
      title: 'Sākuma datums',
      dataIndex: 'date',
    },
    {
      title: 'Reizes',
      dataIndex: 'count',
    }, 
    {
      title: 'Pasniedzēji',
      dataIndex: 'counselor',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Tehnoloģiju Sākums',
      status: 'Neaktīvs',
      price: 5,
      earn: 25,
      date: '2023-03-08 09:18:52',
      count: 1,
      counselor: 'Roberts, Marks' 
    },
    {
      key: '2',
      name: 'Tehnoloģija un tās vēsture',
      status: 'Aktīvs',
      price: 12,
      earn: 62,
      date: '2023-04-01 11:18:52',
      count: 2,
      counselor: 'Marks, Sofija, Anna'
    },
    {
      key: '3',
      name: 'Robotika I (C++, Fortran)',
      status: 'Aktīvs',
      price: 20,
      earn: 120,
      date: '2023-03-12 08:00:00',
      count: 1,
      counselor: 'Olivers, Gustavs, Elīna'
    },
    {
      key: '4',
      name: 'Robotika II (C++, Arduino, IDE)',
      status: 'Neaktīvs',
      price: 5,
      earn: 0,
      date: '2023-03-12 10:00:00',
      count: 1,
      counselor: 'Daniels, Marks, Emīlija'
    },
    {
      key: '5',
      name: 'Back-End Pilnīgajam iesācējam I',
      status: 'Neaktīvs',
      price: 4,
      earn: 62,
      date: '2023-03-20 10:45:00',
      count: 1,
      counselor: 'Roberts, Marks, Anna'
    },
    {
      key: '6',
      name: 'Pastaiga ar robot-suni ',
      status: 'Aktīvs',
      price: 0,
      earn: 0,
      date: '2023-03-15 11:00:00',
      count: 1,
      counselor: 'Marks, Roberts, Daniels, Kārlis, Alise, Amēlija, Katrīna'
    },
    {
      key: '7',
      name: 'Back-End pilnīgajam iesācējam II',
      status: 'Neaktīvs',
      price: 6,
      earn: 88,
      date: '2023-03-25 09:18:52',
      count: 2,
      counselor: 'Roberts, Marks'
    },
    {
      key: '8',
      name: 'Advancētā Robotika I ',
      status: 'Aktīvs',
      price: 5,
      earn: 0,
      date: '2023-03-08 09:00:00',
      count: 1,
      counselor: 'Sofija, Anna'
    },
    {
      key: '9',
      name: 'Advancētā Robotika II ',
      status: 'Neaktīvs',
      price: 10,
      earn: 240,
      date: '2023-03-08 08:00:00',
      count: 2,
      counselor: 'Sofija, Anna'
    },
    {
      key: '10',
      name: 'Robotika III (C++, Arduino, IDE)',
      status: 'Aktīvs',
      price: 10,
      earn: 0,
      date: '2023-03-08 09:18:52',
      count: 3,
      counselor: 'Daniels, Marks, Emīlija'
    },
  ];
  const [count, setCount] = useState(data.length);
  const [disableAdd, setDisableAdd] = useState(false); // Add this line to declare the state
  const [dataSource, setDataSource] = useState(data);
  const [value2, setValue2] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const onChange2 = (newValue2) => {
    setValue(newValue2);
  }; 
  const [form] = Form.useForm(); 
  const handleAdd = () => {
    setModalVisible(true);
  };
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };
  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setModalVisible(true);
    setDisableAdd(true);
  };
  const handleRemove = (record) => {
    console.log(record.key);
  };
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    form.resetFields();
    form.setFieldsValue({key: null});
    setModalVisible(false);
    setDisableAdd(false); // Add this line to re-enable the Add button
  };
  const handleSave = (values, key) => {
    const newDataSource = [...dataSource];
    const index = newDataSource.findIndex((item) => item.key === key);
    newDataSource.splice(index, 1, { ...values, key });
    setDataSource(newDataSource);
    form.resetFields();
    form.setFieldsValue({ key: null });
    setModalVisible(false);
  };
  const onFinish = (values) => {
    handleSave(values, form.getFieldValue('key'));
  };
  const handleDelete = (record) => {
    const newDataSource = [...dataSource];
    const index = newDataSource.findIndex((item) => item.key === record.key);
    newDataSource.splice(index, 1);
    setDataSource(newDataSource);
  };
  const { RangePicker } = DatePicker;
  const onChange = (value: number | string, date, e: RadioChangeEvent) => {
    setValue(e.target.value);
    updateData(date);
  };
  const onOk = (value, date) => {
    updateData(date);
    console.log('onOk: ', value);
    console.log('OK button clicked, selected date:', date);
  };
  const updateData = (date) => {
    setData({
      ...data,
      date: date.valueOf() // convert date object to timestamp (number)
    });
  };
  const handleNewRow = () => {
    const newData = {
      key: count,
      name: ' ',
      status: ' ',
      price: 0,
      earn: 0,
      date: 0,
      count: 1,
      counselor: ''
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };




  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };



  return (
    <>
      <Layout>
        <SideMenu/>
        <Layout>
          <Header className='heed'>Saraksts</Header>
          <Breadcrumb className='bread'>
            <Breadcrumb.Item href="Home">
              <HomeOutlined className='bread__icon'/>
              <span>Sākums</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="News">
              <span>Jaunumi</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className='mainContent'>
            <div className='pageStyling'>
              <div className='pageContent'>
                <Button
                  className='tableBtn'
                  onClick={handleNewRow}
                  type="primary"
                  style={{ marginBottom: 16, }}>
                  Jauns ieraksts
                </Button>
                <Table
                  className='tableing'
                  columns={[
                    ...columns,
                    {
                      title: 'Darbība',
                      dataIndex: 'action',
                      render: (_, record) => (
                        <>
                          <Button onClick={() => handleEdit(record)}>{form.getFieldValue('key') === record.key ? 'Labošana...' : 'Labot'}</Button>
                          <Button onClick={() => handleDelete(record)} style={{marginLeft: '10px'}}>Dzēst</Button>
                        </>
                      ),
                    },
                  ]}
                  dataSource={dataSource}
                  rowKey="key"/> 
                <Modal
                  title="Edit"
                  visible={modalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}> 
                  <Form form={form} onFinish={onFinish}>
                    <Form.Item name="name" label="Nosaukums">
                      <Input />
                    </Form.Item> 
                    <Form.Item name="status" label="Status">
                      <Radio.Group onChange2={onChange2} value={value2}>
                        <Radio value={'Aktīvs'} className='statusOne'>Aktīvs</Radio>
                        <Radio value={'Neaktīvs'} className='statusTwo'>Neaktīvs</Radio>
                      </Radio.Group>
                    </Form.Item> 
                    <Form.Item name="price" label="Maksa (€)">
                      <Space>
                        <InputNumber
                          className='priceStyleOne'
                          defaultValue={0}
                          parser={(value2) => value2!.replace(/\$\s?|(,*)/g, '')}
                          onChange={onChange}/>
                      </Space>
                    </Form.Item>
                    <Form.Item name="earn" label="Nopelnīts (€)">
                      <Space>
                        <InputNumber
                          className='priceStyleTwo'
                          defaultValue={0}
                          parser={(value2) => value2!.replace(/\$\s?|(,*)/g, '')}
                          onChange={onChange}/>
                      </Space>
                    </Form.Item>
                    <Form.Item name="date" label="Datums">
                      <Space>
                        <DatePicker showTime onOk={onOk} placeholder="Izvēlēties pulciņa datumu"/>
                      </Space>
                    </Form.Item> 
                    <Form.Item name="count" label="Reizes">
                      <Space>
                        <InputNumber parser={value2} min={1} max={30} defaultValue={3} onChange2={onChange2} placeholder="Cik reizes notiks pulciņš"/>
                      </Space>
                    </Form.Item>
                    <Form.Item name="counselor" label="Pasniedzēji">
                      <Space>
                        <Input
                          className='treeBtn'
                          showSearch
                          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                          placeholder="Piem.: Roberts, Elza, Olivers"
                          allowClear
                          treeDefaultExpandAll
                          onChange={value => setSelectedCounselor(value)}>
                        </Input>
                        {contextHolder}
                        <Button type="primary" onClick={success}>
                          Saglabāt
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </div> 
          </Content>
       </Layout>
      </Layout>
    </>
  );
};
export default Saraksts;