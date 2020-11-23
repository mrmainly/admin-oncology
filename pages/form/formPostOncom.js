import React from 'react'
import { Input, Layout, Typography, } from 'antd';
import axios from 'axios'

import Navbar from '../../components/Navbar/NavbarMain'
import DownNavbar from '../../components/Navbar/DownNavbar'
import FormOncomComponent from '../../components/form-component/FormOncomComponent'
 

const FormPostOncom = () => {
    return(
        <Layout>
        <Navbar />
       <DownNavbar />
        <Layout style={{marginLeft: '5%',}}>
            <FormOncomComponent />
        </Layout>
    </Layout>
    )   
}

export default FormPostOncom