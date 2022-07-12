import {Layout, Menu} from 'antd'
import React, { Children } from 'react'
const {Header, Content, Footer} = Layout
import styles from '../styles/Home.module.css'
//import '../styles/SkanLayout.css'


const SkanLayout = ({children}) => {
   
    const items = [{label: 'item 1', key: 'item-1' },  { label: 'item 2', key: 'item-2' }]
    
    return (
        <Layout className="layout" >
        <Header style={{background: "#001529"}} className={styles.header}>
            <div className={styles.logo} />
            <Menu items={items} mode="horizontal" theme="dark" />

            
        </Header>
        {children}
        <Footer className={styles.footer}> Skandog designs ©2022 Created by Skandy with help from School of Code</Footer>
        </Layout>
      );
}
 
export default SkanLayout;