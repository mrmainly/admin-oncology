import React from 'react'
import {Typography, Form, Checkbox, TimePicker, Input} from 'antd'


const { Title, Text } = Typography;

const ActivForm = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return(
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
    )
}

export default ActivForm