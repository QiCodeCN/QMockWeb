import React, { useState } from "react";
import { useRequest } from 'umi';

// 引入组件依赖
import { Button, Space, Table, Modal, Form, Input } from "antd";
const { TextArea } = Input;

// 导入sever接口请求方法
import { getProductList, saveProduct } from "@/pages/Project/service";

const projectColumns = [
  {dataIndex:"id",title:"编号",},
  {dataIndex:"name",title:"名称",},
  {dataIndex:"desc",title:"描述",},
  {dataIndex:"type",title:"类型",},
  {dataIndex:"owner",title:"负责人",},
  {dataIndex:"updateDate",title:"更新时间",},
  {dataIndex:"option",title:"操作",
    render: (text, record) => (
      <Space>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
]

const Project = () => {

  // 获取全部项目数据
  const {data:useProjectList, error, loading, run: reloadProjectList} = useRequest(getProductList);

  // 定义表单控制和隐藏，处理相关动作
  const [projectVisible, setProjectVisible] = useState(false);
  const addAction = () => {
      setProjectVisible(true);
  }

  // 经创建的 form 控制实例
  const [formProject] = Form.useForm();

  // 返回渲染的组件
  return (
    <>
      <Button
        onClick={addAction}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        项目添加
      </Button>
      <Modal
        title="项目添加"
        visible={projectVisible}
        destroyOnClose="true"
        onCancel={()=>setProjectVisible(false)}
        onOk={() => {
          formProject
            .validateFields()
            .then(async (values) => {
              const data = {
                name: values.name,
                owner: values.owner,
                desc: values.desc,
                type: 'public',
                operator: '大奇'
              }
              const resp = await saveProduct(data);
              if (resp.success) {
                formProject.resetFields(); // 表单清除历史
                setProjectVisible(false);
                reloadProjectList();
              }
            })
            .catch((info) => {
              console.log('保存项目异常', info);
            });
        }}
      >
        <Form form={formProject}>
          <Form.Item
            name='name'
            label='名称'
            rules={[
               {
                 required: true,
                 message: '项目名称为必填项！',
               },
             ]}
          >
            <Input placeholder="请输入项目名称"></Input>
          </Form.Item>
          <Form.Item name='owner' label='负责人'>
            <Input placeholder="项目相负责人"></Input>
          </Form.Item>
          <Form.Item name="desc" label="更多信息">
            <TextArea/>
          </Form.Item>
        </Form>
      </Modal>
      {/*使用表格组件*/}
      <Table
        loading={loading}
        rowKey="id"
        pagination={false}
        columns={projectColumns}
        dataSource={useProjectList}
      />
    </>
  )
}

export default Project;
