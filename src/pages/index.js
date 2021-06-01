/*
 * @Author: your name
 * @Date: 2021-05-31 22:24:33
 * @LastEditTime: 2021-06-01 16:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello-world\src\pages\index.js
 */
import React from "react"
import { Input } from "antd"


export default () => {

  const {Search} = Input;
  const proteinList = [{name:"A",url:"/content",pathways:[{name:"first",url:"https://www.baidu.com"}] }];
  const onSearch = (value) => {
    const queryList = proteinList.filter(array => array.name.match(value));
    console.log(queryList[0].url)
    window.location.assign(queryList[0].url)
  }
  return(
    <Search
    placeholder="input search text"
    enterButton="search"
    size="large"
    onSearch={onSearch}
  />
  )
  }
