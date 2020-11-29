import React from 'react'
import { Form, Input, Button, Layout, Typography, InputNumber } from 'antd';

import Navbar from '../../components/Layout/NavbarMain'
import FormStudyCom from '../../components/form-component/FormStudyCom'
import DownNavbar from '../../components/Navbar/DownNavbar'
import LeftPanel from './LeftPanel';

const { Search, TextArea } = Input;
const {Content} = Layout;
 

const LayoutMain = ({children}) => {
  
    return(
        <Layout>
          <LeftPanel />
            <Layout> 
            <Navbar />
            <Layout style={{marginLeft: '5%',}}>
                {children}
            </Layout>
            </Layout>
        </Layout>
    )   
}

export default LayoutMain