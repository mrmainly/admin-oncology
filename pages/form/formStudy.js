import React from 'react'
import { Form, Input, Button, Layout, Typography, InputNumber } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

import Navbar from '../../components/Navbar/NavbarMain'
import FormStudyCom from '../../components/form-component/FormStudyCom'
import DownNavbar from '../../components/Navbar/DownNavbar'

const { Search, TextArea } = Input;
const {Content} = Layout;
const {Title} = Typography;
 

const FormStudy = () => {
  
    return(
        <Layout>
            <Navbar />
            <DownNavbar />
            <Layout style={{marginLeft: '5%',}}>
                <FormStudyCom />
            </Layout>
        </Layout>
    )   
}

export default FormStudy