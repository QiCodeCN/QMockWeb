import React, { useState, useRef } from 'react';

/* 抽离出来的组件，用于优化页面代码 */
const CustomizeComponent = (props) => {
  return (
    <>
      <p>{props.showName}</p>
    </>
  )
}

// 名字要与参数函数名相同
export default CustomizeComponent;
