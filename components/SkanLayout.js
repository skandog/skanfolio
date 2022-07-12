import {Layout, Menu} from 'antd'
import React, { Children } from 'react'
const {Header, Content, Footer} = Layout
import styles from '../styles/Home.module.css'

const SkanLayout = ({children}) => {
   
    
    
    return (
        <Layout className="layout" >
        <Header className={styles.header}>
            <div className='logo' />
            <Menu
        theme="dark"
        mode="horizontal"
     
      />
        </Header>
        {children}
        <Footer className={styles.footer}> Skandog designs ©2022 Created by Skandy with help from School of Code</Footer>
        </Layout>
      );
}
 
export default SkanLayout;