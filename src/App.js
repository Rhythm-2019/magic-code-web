import React from 'react';
import { Layout } from 'antd';
import { useRoutes } from 'react-router-dom';
import routers from './routers'
import styles from './App.module.css'
import styleUtils from './utils/index.module.css'
import HeaderContent from './components/layout/header';

const { Header, Content, Footer } = Layout;

const App = () => {

  const elements = useRoutes(routers)
  console.log(styles.layout)
  return (
    <Layout className={styles.layout}>
      <Header>
        <HeaderContent/>
      </Header>
      <Content className={styles.Content}>
        <div className={styles.innerContent}>
          {elements}
        </div>
      </Content>
      <Footer className={styleUtils.textAlignCenter}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};
export default App;