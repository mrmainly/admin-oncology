import React, { useState, } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Checkbox,
  Button,
  Row,
  Col,
  TimePicker
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusCircleOutlined 
} from "@ant-design/icons";
import Week from "../Week";
import ColSchudule from "./colSchudule/Col";

const { Title, Text } = Typography;
const { Meta } = Card;
const SchuduleCard = () => {
  const [col, setCol] = useState({ num: "10:25" });

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Card>
      <Title level={5}> Дни активация</Title>
      <Week />
      <Form
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Form.Item style={{ width: "28%" }}>
          <Title level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
            Начало
          </Title>
          <TimePicker bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
        </Form.Item>
        <Form.Item style={{ width: "28%" }}>
          <Title level={5} style={{ color: "gray", whiteSpace: "nowrap" }}>
            Конец
          </Title>
          <TimePicker bordered={false} style={{ borderBottom: "1px solid gray", width:'100%' }} />
        </Form.Item>
        <Form.Item style={{ width: "28%" }}>
          <Title level={5} style={{ color: "gray", whiteSpace: "nowrap" }}>
            Продолжительность
          </Title>
          <Input bordered={false} type="number" style={{ borderBottom: "1px solid gray" }} />
        </Form.Item>
        <Checkbox style={{ marginTop: 45 }} onChange={onChange}>
          Не ограничивать
        </Checkbox>
      </Form>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Button>Сохранить изменения</Button>
        <Text style={{ marginLeft: 10 }}>
          *Поля обязатедбные для заполнения
        </Text>
      </div>
      <Title level={5} style={{ marginTop: 20 }}>
        Сетка расписаний
      </Title>
      <Row justify="space-between">
        {/* {col ? col.map(e => (
                         <ColSchudule title={e.num} />
                     )) : null} */}
        <Col span={1}>
          <Button>10:25</Button>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={14} style={{marginTop: 20}}>
          <Card
            title="Перерывы"
            actions={[
              <PlusCircleOutlined key="plus" />,
              <EditOutlined key="edit" />,
              <SettingOutlined />
            ]}
          >
         <Row justify="space-between"> 
             <Form.Item style={{ width: "28%" }}>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                  Начало
                </Text>
                 <TimePicker bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
                </Form.Item>
                <Form.Item style={{ width: "28%" }}>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                    Продолжительность(мин)
                   </Text>
                 <Input bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
                </Form.Item>
                <Form.Item style={{ width: "28%" }}>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                    Управление
                   </Text>
                 <Input bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
                </Form.Item>
             </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default SchuduleCard;
