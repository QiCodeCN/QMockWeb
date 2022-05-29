import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

const FormDemo = () => {
  // 提交按钮触发onFinish事件，其中values为表单的绑定参数集
  const baseOnFinish = (values) => {
    console.log('Form.Item绑定的字段集合:', values);
  };

  return(
    <>
      <Form onFinish={baseOnFinish}>
        <Form.Item
          name="item1"
          label="字段1"
          rules={[
            { required: true, message: '字段1为必填项！', validateTrigger:'onBlur'}
          ]}
        >
           <Input/>
        </Form.Item>
        <Form.Item
          name="item2"
          label="字段2"
         rules={[
           { required: true, message: '字段2为必填项！'},
           { min: 5, max:10, message: '字符长度需要控制在5-10个字符！',validateTrigger:'onBlur'},
           { pattern: '', validateTrigger: 'tr'}
         ]}
        >
          <Input width='200'/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormDemo;
