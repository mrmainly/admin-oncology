import React, { useContext, useEffect, useState } from "react";
import { Table, Layout, Input , Button, Menu} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import axios from "axios";
import {ContextFilter} from '../../contextFilter'
import "antd/dist/antd.css";
import LayoutMain from '../../components/Layout/LayoutMain'

const {Search} = Input;
const { Header, Content } = Layout;


const ChoiseAncet = () => {
  const [data, setData] = useState("");
  const [selectionType, setSelectionType] = useState('checkbox');
  useEffect(() => {
    dataget()
  });
  const onSearch = value => console.log(value);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows); //пикнул чена после энчи наелся кончи
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', 
      name: record.name,
    }),
  };
  const columns = [
    {
      title: "ПОЛЬЗОВАТЕЛЬ",
      dataIndex: "AncetUser",
      key: "AncetUser",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ВЫЧЕСЛИТЬ РЕЗУЛЬТАТ",
      dataIndex: "SCORE",
      filters: [
        {
          text: 'true',
          value: "true",
        },
        {
          text: 'false',
          value: "false",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.SCORE.indexOf(value) === 0,
      sorter: (a, b) => a.SCORE.length - b.SCORE.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  const dataget = async () => {
    try {
     await axios.get("http://localhost:4200/AllANCET").then((res) => {
       console.log('efwef', res.data)
        setData(res.data)
      });
    } catch (err) {
      console.log(err);
    }
  }
  // const filterFalse = async () => {
    
  //  setData(
  //     data.filter((datas) => {
  //     return datas.SCORE == false
  //   }))
  // }
  return (
    <ContextFilter.Provider>
        <LayoutMain>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
        <Search
      allowClear
      enterButton="Добавить"
      size="average"
      onSearch={onSearch}
      style={{width: '30%', marginBottom: 15}}
    />
    
      <Button style={{backgroundColor: '#a8a8a8', float: "right"}} type="default" shape="round" icon={<DownloadOutlined />} size="average">
          ДОБАВИТЬ ПОЛЬЗОВАТЕЛЬ
        </Button>
        {/* <Filter /> */}
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange}/>
    </Content>
    </LayoutMain>
    </ContextFilter.Provider>
  );
};

export default ChoiseAncet;
