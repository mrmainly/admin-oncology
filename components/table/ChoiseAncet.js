import React, { useContext, useEffect, useState } from "react";
import { Table, Layout, Input , Button, Menu} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import axios from "axios";
import "antd/dist/antd.css";

import Filter from '../Filter'

const {Search} = Input;
const { Header, Content } = Layout;


const ChoiseAncet = () => {
  const [data, setData] = useState("");
  const [selectionType, setSelectionType] = useState('checkbox');
  useEffect(() => {
    try {
      axios.get("http://localhost:4200/AllANCET").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  const onSearch = value => console.log(value);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
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
      key: "SCORE",
    },
  
  ];
  return (
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
        <Filter />
        
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </Content>
  );
};

export default ChoiseAncet;
