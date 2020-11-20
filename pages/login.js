import { Form, Input, Button, Radio} from 'antd';
import React, {useState} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
const Container = styled.div`
    
`
const ButtonDiv = styled.div`
 
`
const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 7 ,},
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 1 },
};

const Login = () => {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [value, setValue] = React.useState(1);
    const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
  };
 

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = () => {
    axios.post('wefwef', {
        name: name,
        password: password,
    }).then((res) => {
        if(res.status == 200) {
            router.push('/')
        }
    })
  }

  return (
    <Container>
      <ButtonDiv style={{display: 'flex', justifyContent: 'flex-end', marginTop: 20, marginRight: 20}}>
          <Button>Инструкция</Button>
      </ButtonDiv>
    <Radio.Group style={{display: 'flex', justifyContent: "center", marginTop: 100 , }} onChange={onChange} value={value} size="large">
      
        <Radio.Button  value={1} style={{marginRight: 10,}}><Image src="/img/kok.png" width={25} height={25}/></Radio.Button>
        <Radio.Button value={2} style={{marginLeft: 10}}><Image src="/img/kok2.jpg" width={25} height={25}/></Radio.Button>
    </Radio.Group>
    
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="middle"
      style={{marginTop: 50}}
    >
    
      <Form.Item
        label="имя"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите свое имя' }]}
      >
        <Input value={name} onChange={(e) => {
            setName(e.target.value)
        }} />
      </Form.Item>

      <Form.Item
        label="пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
      >
        <Input.Password value={password} onChange={(e) => {
            setPassword(e.target.value)
        }} />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit" onClick={handleClick}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
    </Container>
  );
};

export default Login