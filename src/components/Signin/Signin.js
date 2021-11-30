import { Button, Col } from "antd";
import { Link } from "react-router-dom";
import { Form, Input, Row } from 'antd';
import 'antd/dist/antd.css'
import '../all/all.scss';
import { signInWithEmailAndPassword } from "@firebase/auth";
import { db, auth } from "../firebase/firebase";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";

const Signin = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const email = values.email;
        const password = values.password;
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user)
                console.log(user);
            alert('Loged in Successfully')
            navigate('/');
            document.getElementsByTagName('input').value = " ";
        } catch (error) {
            console.log(error)
            alert("no")
            navigate('/signin')
            document.getElementsByTagName('input').value = " ";
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row>
                <Col span={10} offset={1} className="m-t-10 border rounded p-3">
                    <h1>
                        Sign In
                    </h1>
                    <Form name="basic" initialValues={{ remember: true, }} className="m-t-10" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your username!', type: 'email' },]} >
                            <Input className="inputEmail" />
                        </Form.Item>
                        <Form.Item label="Password  " name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                            <Input.Password className="input" />
                        </Form.Item>
                        <p>dont have an Account? <Link to="/signup">SignUp</Link></p>
                        <Form.Item className="m-t-10" wrapperCol={{ offset: 10, span: 4, }} >
                            <Button type="primary" htmlType="submit" >Signin</Button>
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
export default Signin;
