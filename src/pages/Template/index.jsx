import React, { useState, useRef } from 'react';
import CustomizeComponent from "./components/CustomizeComponent";

/* 空白的模版页面，一般函数变量名和文件夹名（内部主页面以index.js时）或者jsx文件名相同大写*/
const Template = () => {
  return (
    <>
     <p>新建空白模版页</p>
      <CustomizeComponent
        showName="抽离的组件名称"
      />
    </>
  )
}

// 名字要与参数函数名相同
export default Template;
