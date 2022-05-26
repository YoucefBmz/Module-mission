import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';


const Login = () => {
    const navigate = useNavigate()
      const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/dashboard')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div className="login">
            <div className="form-container">
            <h1>Mission Module</h1>
                    <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                            
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            offset: 5,
                            //span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 5,
                            span: 3,
                            }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
            </div>
        </div>
     );
}
 
export default Login;