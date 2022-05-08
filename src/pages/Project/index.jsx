import React, { useState, useRef, useEffect } from "react";
import { useRequest } from 'umi';

// 引入组件依赖
import { Space, Table } from "antd";
// 导入sever接口请求方法
import { getProductList } from "@/pages/Project/service";

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

  // 返回渲染的组件
  return (
    <>
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
