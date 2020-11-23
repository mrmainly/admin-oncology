import React from 'react'
import { Form, Input, Button, Layout, Typography } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

import Navbar from '../../components/Navbar'

const { Search, TextArea } = Input;

const {Title} = Typography;
 

const FormStudy = () => {
    const onSearch = value => console.log(value);
    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
    };
    
    return(
        <Layout>
            <Navbar />
            <Layout style={{marginLeft: 70,}}>
            <Title level={3} style={{color: '#a8a8a8', fontFamily: 'unset'}}>Добавить Результаты исследования НДКТ</Title>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
            >
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
                style={{ width: '50%', margin: '0 10px' }}
                autoSize={{ minRows: 5, maxRows: 5 }}
                />
            </Form.Item>

            <Form.Item
                label="Эффективная доза"
                name="Эффективная доза"
                rules={[{ required: true, message: 'введите эффективную дозу' }]}
            >
            <Search
                placeholder="введите в форму имя пациента"
                allowClear
                onSearch={onSearch}
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
                style={{ width: '50%', margin: '0 10px' }}
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
                style={{ width: '50%', margin: '0 10px' }}
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
            </Form.Item>
            </Form>
            </Layout>
        </Layout>
    )   
}

export default FormStudy