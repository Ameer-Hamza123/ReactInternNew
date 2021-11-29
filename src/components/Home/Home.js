import { Button } from "antd"
import { Link } from "react-router-dom"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Select, Tag } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'antd';


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
      
    setIsModalVisible(false);
  };


  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

//   const tagRender=()=>(props) 
//     const { label, value, closable, onClose } = props;
//     const onPreventMouseDown = event => {
//       event.preventDefault();
//       event.stopPropagation();
//     };



  const menu=(
    <Menu id="pop">
<Menu.Item key="0">
  <a href="https://www.antgroup.com">Front-End Web Developer</a>
</Menu.Item>
<Menu.Item key="1">
  <a href="https://www.aliyun.com">Back-End Web Developer</a>
</Menu.Item>
<Menu.Divider />


<Menu.Item key="3">Android Developer</Menu.Item>
</Menu>
);

  return (
    <>
    
    <Button type="primary"><Link to="signin">Home to Signin</Link></Button>
<h1>Home</h1>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
        <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}id ="antbut">
    <h2>Create new Team</h2>
<input type="text" placeholder="Team Name" /><hr />
 <br />
 <Dropdown overlay={menu} trigger={['click']} id="drop" >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} id="pop">
      Category <DownOutlined />
    </a>
  </Dropdown>
  
  
  <br /> <br /><input type="text" placeholder="Members (type Email)"/><hr />
  <br />



<Button type="primary" className="butt1"  onCancel={handleCancel}>Create</Button>
    <Button className="butt2" htmlType="button" onclick={handleCancel}>Cancel</Button>
  
    {/* <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>

    <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  /> */}


      </Modal>




    </>
  );
};
export  default App;