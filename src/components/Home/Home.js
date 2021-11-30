import { Button, Row, Col, message, Modal, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import { db, auth } from "../firebase/firebase";
import { collection, getDocs } from "@firebase/firestore";
import '../all/all.scss'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { signOut } from "@firebase/auth";
const Home = () => {
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
    document.body.style.overflow = "hidden";
    const navigate = useNavigate();
    // const querySnapshot = getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.data()}`);
    //   const nAme = ` ${doc.data().Name}`;
    //   const eMail = ` ${doc.data().Email}`;
    //   const pAssword = `${doc.data().Password}`;
    //   console.log(nAme + eMail + pAssword)
    // });
    // console.log(querySnapshot)
    //const signout = async () => await signOut(auth);
    const signout = async()=>{
        try{
            await signOut(auth);
            navigate('/signin')
            document.body.style.removeProperty('background-image')
        }
        catch(error){
            console.log(error);
            navigate('/')
        }
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      };
    const div = <Row className="m-b-5">
        <Col className="border" span={22} offset={1}>
            <Row>
                <Col className="text-start mt-5" span={22} offset={1}>
                    <h3>Developer</h3>
                </Col>
                <Col className="text-start mb-5" span={22} offset={1}>
                    asif,habib & 3others
                </Col>
            </Row>
        </Col>
    </Row>;
    return (
        <>
            <div className="main-Home">
                <div className="inner rounded">
                    <div className="border">
                        <Row>
                            <Col className="p-t-2 text-start" span={7} offset={1}>
                                Hamza Khatri
                            </Col>
                            <Col span={8}>
                                <h2 className="text-center font-30">Team You're Own</h2>
                            </Col>
                            <Col span={7} className="p-t-2">
                                <Button type="primary" onClick={showModal}>
                                    Create Team
                                </Button>
                                <Button type="primary" onClick={signout} className="float-right">
                                    SignOut
                                </Button>
                            </Col>
                        </Row>

                        {div}
                        {div}
                        <h2 className="text-center font-30">Team You're Part of</h2>
                        {div}
                        {div}
                    </div>
                </div>
            </div>
            <Modal title="Create Team" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
                                    <Form name="basic" labelCol={{ span: 6, }} wrapperCol={{ span: 17, offset: 1 }} initialValues={{ emember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                                        <Form.Item label="Team Name" name="teamname" rules={[{ required: true, message: 'Please input your Team Name', },]} >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Team Name" name="teamname" rules={[{ required: true, message: 'Please input your username!', },]} >
                                            <Input />
                                        </Form.Item>
                                        <Form.List name="names" rules={[{ validator: async (_, names) => { if (!names || names.length < 0) { return Promise.reject(new Error('At least 2 passengers')); } }, },]} >
                                            {(fields, { add, remove }, { errors }) => (
                                                <>
                                                    {fields.map((field, index) => (
                                                        <Form.Item label="Member's" name="members" {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)} label={index === 0 ? 'Member' : ''} required={false} key={field.key} >
                                                            <Form.Item {...field} validateTrigger={['onChange', 'onBlur']} rules={[{ required: true, whitespace: true, message: "Please input passenger's name or delete this field.", },]} noStyle >
                                                                <Input style={{width:'85%',float:'right'}}/>
                                                            </Form.Item>
                                                            {fields.length > 1 ? (
                                                                <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                                                            ) : null}
                                                        </Form.Item>
                                                    ))}
                                                    <Form.Item label="Member's" name="members" >
                                                        <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                                                            Add field
                                                        </Button>
                                                        <Form.ErrorList errors={errors} />
                                                    </Form.Item>
                                                </>
                                            )}
                                        </Form.List>
                                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                            <Button className="m-l-2" type="primary" htmlType="submit">
                                                Cancel
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Modal>
        </>
    );
};
export default Home;