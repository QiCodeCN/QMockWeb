import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalDemo = () => {

  // 定义Hook state变量，控制对话框显隐，默认false
  const [modalVisible, setModalVisible] = useState(false);

  // 打开对话框方法，主要设置modalVisible=true
  const openModal = () => {
    setModalVisible(true);
  };

  // 对话框确定按钮点击的操作
  const okModal = () => {
    console.log('点击了对话框OK按钮！')
    setModalVisible(false);
  }

  /** 确认对话框一般用于提示 **/
  const successModal = () => {
    Modal.success({
      content: '成功：大奇与你一起，坚持学习，持续成长！',
    });
  };

  // render渲染div
  return(
    <>
      <div id="baseModal">
        <Button type="primary" onClick={openModal}>
          打开基础对话框
        </Button>
        <Modal
          title="基础Modal"
          visible={modalVisible}
          onCancel={()=>setModalVisible(false)}
          onOk={okModal}
        >
          <p>这是一个简单对话框打开和关闭演示！</p>
        </Modal>
      </div>
      <br/>
      <div id="confirmModal">
        <Button type="link" onClick={successModal}>打开成功消息对话框</Button>
      </div>
    </>
  )
}

export default ModalDemo;
