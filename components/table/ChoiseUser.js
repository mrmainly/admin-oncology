import React, { useContext, useEffect, useState } from "react";
import { Table, Layout, Button, Input } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import axios from "axios";

const {Search} = Input;
const { Header, Content } = Layout;

const ChoiseUser = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    try {
      axios.get("http://localhost:4200/AllData").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  const onSearch = value => console.log(value);
  const columns = [
    {
      title: "НОМЕР ТЕЛЕФОНА",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "ФАМИЛИЯ ИМЯ ОТЧЕСТВО",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "АКТИВЕН",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "НОМЕР СНИЛС",
      dataIndex: "snils",
      key: "snils",
    },
    {
      title: "НОМЕР ОМС",
      dataIndex: "oms",
      key: "oms",
    },
    {
      title: "НАЦИОНАЛЬНОСТЬ",
      dataIndex: "national",
      key: "national",
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
      <Table columns={columns} dataSource={data} />
    </Content>
  );
};

export default ChoiseUser;
