import React, { Fragment, useMemo } from 'react';
import { Menu, Avatar, Button, Popover } from 'antd';
import { UserOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';
import { createUpdateUserInfoAction } from '../../../redux/actions/userInfo';
import { useState } from 'react';
import styles from './index.module.css';
import { connect } from 'react-redux';

const items = [
  {
    label: 'Snippets Playground',
    key: 'Snippets',
    icon: <MailOutlined />,
  }
];


function HeadContent(props) {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { arrowPointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  const [selectMenuItems, setSelectMenuItem] = useState('Snippets');
  const menuOnClick = (e) => {
    setSelectMenuItem(e.key);
    // 跳转
  };

  const avatarProps = {};
  if (props.userInfo == null) {
    var popoverContent = (
      <div>
        <Button size="large" icon={<GithubOutlined />}>Github Login</Button>
      </div>
    )
    avatarProps['icon'] = <UserOutlined />;
   
  } else {
    avatarProps['src'] = props.userInfo.avatarUrl;
    var popoverContent = (
      <div>
        {this.props.notification.map((notification) => { 
          
         })}
      </div>
    )
  }


  return (
    <Fragment>
      <div className={styles.logo}>MagicCode</div>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={menuOnClick}
        items={items}
        selectedKeys={selectMenuItems}
      />
      <Popover placement="bottomRight" content={popoverContent} arrow={mergedArrow}>
        <Avatar size="large" className={styles.avatar} {...avatarProps} />
      </Popover>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return { userInfo: state.userInfo }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: () => {
      dispatch(createUpdateUserInfoAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeadContent);