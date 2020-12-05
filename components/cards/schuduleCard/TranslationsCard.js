import React, {useState, useEffect} from 'react'
import {Row, Col, Form, Card, Typography, Input, TimePicker} from 'antd'
import {
    EditOutlined,
    SettingOutlined,
    PlusCircleOutlined 
} from "@ant-design/icons";

const {Text, Title} = Typography

const TranslationCard = () => {
    const [start, setStart] = useState()
    useEffect(() => {
        console.log('qdwqdw', start)
    }, [start])
    return(
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
         <Col span={8}>
             <Form.Item>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                  Начало
                </Text>
                 <TimePicker bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
                </Form.Item>
        </Col>
        <Col span={7}>
                <Form.Item>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                    Продолжительность(мин)
                   </Text>
                 <Input bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} value={start} onChange={(e) => {
                    setStart(e.target.value)
                 }} />
                </Form.Item>
        </Col>
        <Col span={7}>
                <Form.Item>
                <Text level={5} style={{ color: "gray", whiteSpace: "nowrap", }}>
                    Управление
                   </Text>
                 <Input bordered={false} style={{ borderBottom: "1px solid gray", width: '100%' }} />
                </Form.Item>
        </Col>
             </Row>
          </Card>
        </Col>
      </Row>
    )   
}

export default TranslationCard