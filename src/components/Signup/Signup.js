import { Button, Col } from "antd";
import { Link } from "react-router-dom";
import { Form, Input, Row } from 'antd';
import 'antd/dist/antd.css'
import '../all/all.scss';
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router";
import {db, auth } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore"; 

const Signup = () => {
    const navigate = useNavigate();
    const onFinish = async(values)=>{
        const email = values.email;
        const password = values.password;
        try{
            const user = createUserWithEmailAndPassword(auth,email,password);
            console.log(user);   
            const docRef = addDoc(collection(db, "users"), {
                Name:values.fullname,
                Email:email,
                Password:password
              });
            alert('Successfully Created Account')
            navigate('/signin');
            document.getElementsByTagName('input').value = " ";
        }catch(error){
            console.log(error)
            document.getElementsByTagName('input').value = " ";
        }
    } 
    
    // (values) => {
    //     console.log('Success:', values);
    //     const email = values.email;
    //     const password = values.password;
    //     createUserWithEmailAndPassword(auth,email,password);
    //     navigate('/signin');
    // };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        navigate('/signup');
    };
    return (
        <>
            <Row>
                <Col span={10} offset={1} className="m-t-10 border rounded p-3">
                    <h1>
                        Sign Up
                    </h1>
                    <Form name="basic" initialValues={{ remember: true, }} className="m-t-10" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                        <Form.Item name="fullname" label="Full Name" rules={[ { required: true, }, ]} >
                            <Input className="input"/>
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email',type:'email' },]} >
                            <Input className="inputEmail"/>
                        </Form.Item>
                        <Form.Item label="Password  " name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                            <Input.Password className="input" />
                        </Form.Item>
                        <p>Already Have an Account? <Link to='/signin'>SignIn</Link></p>
                        <Form.Item className="m-t-10" wrapperCol={{ offset: 10, span: 4, }} >
                            <Button type="primary" htmlType="submit" >Signup</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={10} offset={2}>
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" className="image m-t-10 rounded" />
                </Col>
            </Row>

        </>
    );
};
export default Signup;