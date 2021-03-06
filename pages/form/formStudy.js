import React from 'react'
import { Form, Input, Button, Layout, Typography, InputNumber } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

import LayoutMain from "../../components/Layout/LayoutMain"

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
       <Title level={3} style={{color: '#a8a8a8', fontFamily: 'unset'}}>Добавить Результаты исследования НДКТ</Title>
   <Form.Item
       label="Прием пациента"
       name="uПрием пациента"
       rules={[{ required: true, message: 'Please input your username!' }]}
   >
   <Search
       placeholder="введите в форму имя пациента"
       allowClear
       onSearch={onSearch}
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item  
       label="Номер исследования"
       name="Номер исследования"
       rules={[{ required: true, message: 'введите номер исследования' }]}
   >
       <TextArea  
       placeholder="введите в форму имя пациента"
       allowClear
       onSearch={onSearch}
       style={{ width: '70%', margin: '0 10px' }}
       autoSize={{ minRows: 5, maxRows: 5 }}
       />
   </Form.Item>

   <Form.Item
       label="Эффективная доза"
       name="Эффективная доза"
       rules={[{ required: true, message: 'введите эффективную дозу' }]}
   >
   <InputNumber
       allowClear
       style={{ width: '30%', margin: '0 10px' }}
   />
   </Form.Item >
   <Form.Item  
       label="Протокол"
       name="Протокол"
       rules={[{ required: true, message: 'введите протокол' }]}
   >
       <TextArea  
       placeholder="протокол ультразвукого исследования предстательной железы "
       allowClear
       onSearch={onSearch}
       style={{ width: '70%', margin: '0 10px' }}
       autoSize={{ minRows: 5, maxRows: 5 }}
       />
   </Form.Item>
   <Form.Item  
       label="Заключение"
       name="Заключение"
       rules={[{ required: true, message: 'введите заключение' }]}
   >
       <TextArea  
       allowClear
       onSearch={onSearch}
       style={{ width: '70%', margin: '0 10px' }}
       autoSize={{ minRows: 5, maxRows: 5 }}
       />
   </Form.Item>
   <Form.Item  
       label="Врач"
       name="Врач"
       rules={[{ required: true, message: 'введите имя врача' }]}
   >
      <Input style={{ width: '30%', margin: '0 10px' }}/>
   </Form.Item>
   <Form.Item  
       label="Лабирант"
       name="Лабирант"
       rules={[{ required: true, message: 'введите имя лабиранта' }]}
   >
      <Input  style={{ width: '30%', margin: '0 10px' }}/>
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