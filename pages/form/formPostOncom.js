import React from 'react'
import { Form, Input, Button, Layout, Typography, InputNumber, DatePicker, } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

import LayoutMain from '../../components/Layout/LayoutMain'

const { Search, TextArea } = Input;
const {Content} = Layout;
const {Title} = Typography;

const FormStudyCom = () => {
    const onSearch = value => console.log(value);
    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
    };
    const tailLayout = {
        wrapperCol: { offset: 1 , span: 16 },
      };
    return(
        <LayoutMain>
        <Content
            className="site-layout-background"
             style={{
               padding: 24,
               margin: 0,
               minHeight: 280,
}}>
   
   <Form
       {...layout}
       name="basic"
       initialValues={{ remember: true }}
   >
       <Title level={3} style={{color: '#a8a8a8', fontFamily: 'unset'}}>Добавить Онкомаркер</Title>
    <Form.Item
       label="Пользователь"
       name="Пользователь"
       rules={[{ required: true, message: 'пожалуйста введите имя пользователя' }]}
   >
   <Input
       placeholder="Нажмите на иконку и введите имя пациента"
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="CA-125"
       name="CA-125"
       rules={[{ required: true, message: 'пожалуйста введите СА-125' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="ХГЧ"
       name="ХГЧ"
       rules={[{ required: true, message: 'пожалуйста введите ХГЧ' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="ПСА"
       name="ПСА"
       rules={[{ required: true, message: 'пожалуйста введите ПСА' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="ПСА свободный"
       name="ПСА свободный"
       rules={[{ required: true, message: 'пожалуйста введите ПСА свободный' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="АФП"
       name="АФП"
       rules={[{ required: true, message: 'пожалуйста введите АФП' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="СА-15-3"
       name="СА-15-3"
       rules={[{ required: true, message: 'пожалуйста введите СА-15-3' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="РЗА"
       name="РЗА"
       rules={[{ required: true, message: 'пожалуйста введите РЗА' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="СА-19-9"
       name="СА-19-9"
       rules={[{ required: true, message: 'СА-19-9' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="Дата рождения"
       name="Дата рождения"
       rules={[{ required: true, message: 'пожалуйста введите дату рождения' }]}
   >
   <DatePicker
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item
       label="Врач"
       name="Врач"
       rules={[{ required: true, message: 'пожалуйста введите имя врача' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item {...tailLayout} style={{paddingRight: 150}}>
            <Button type="primary" htmlType="submit" autoSize style={{marginLeft: 5, marginTop: 5}}>
               Сохранить и добавить другой обьект
            </Button>
            <Button htmlType="button" type="primary" style={{marginLeft: 5, marginTop: 5}}>
               Сохранить и продолжить редактировани
            </Button>
            <Button type="primary" htmlType="button" style={{marginLeft: 5, marginTop: 5}}>
               Сохранить 
            </Button>
        </Form.Item>
   </Form>
   </Content>
   </LayoutMain>
    )
}

export default FormStudyCom