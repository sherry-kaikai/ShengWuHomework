/*
 * @Author: your name
 * @Date: 2021-05-31 22:24:33
 * @LastEditTime: 2021-06-01 20:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello-world\src\pages\index.js
 */
import React from "react"
import { Input } from "antd"
import { Layout } from 'antd';

export default () => {
  
  const {Search} = Input;
  const { Header, Footer, Sider, Content } = Layout;
  const proteinList = [{name:"A",url:"/content",pathways:[{name:"first",url:"https://www.baidu.com"}] }];
  
  const onSearch = (value) => {
    const queryList = proteinList.filter(array => array.name.match(value));
    console.log(queryList[0].url)
    window.location.assign(queryList[0].url)
  }

  return(
  <Layout>
      <Content>  
      <html>
        <link herf = "css/1.css" type="text/css" rel="stylesheet"/>
        <body 
        background="https://media.cellsignal.cn/www/images/pathways/pathways-144-px.jpg"   
        >
        <h1>
           <font size = "6"  color = "LightCyan">
           信号通路
           </font>
        </h1>
        <p><font size = "4"  color = "white">生命科学导论——神经通路中蛋白质的查询</font></p>
        
        <div align = "center">
        <Search
          placeholder="Please enter the protein sequence name"
          enterButton="search"
          size="large"
          onSearch={onSearch}
        />
        </div>
        <p> 
            
            <font size = "4"  color = "black">
            生命科学导论第二小组制作
             </font>
          </p>

        </body>
       </html>
      </Content>
    
      <html>

          
    </html>
    </Layout>

  )
  
  }
