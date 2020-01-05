import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { WarningPage } from './WarningPage';
import { ResidentDatabase } from './ResidentDatabase';

const axios = require('axios');

const { Header, Content, Footer, Sider } = Layout;


export class Resident extends React.Component {
    state = {
        collapsed: false,
        username: undefined,
        role: undefined,
        logined: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    updateLogin = (checked, username, role) => {
        this.setState({
            logined: checked,
            username: username,
            role: role
        });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/resident/database">
                                <Icon type="ant-design" />
                                <span>Database</span>
                            </Link>
                        </Menu.Item>
                        {(this.state.logined && this.state.logined !== 'UnAuth') && <Menu.Item key="3">
                            <Link to="/passportadmin">
                                <Icon type="logout" />
                                <span>Log Out</span>
                            </Link>
                        </Menu.Item>}
                        {(this.state.logined === false || this.state.logined === 'UnAuth') && <Menu.Item key="4">
                            <Link to="/passportadmin">
                                <Icon type="arrow-left" />
                                <span>Back</span>
                            </Link>
                        </Menu.Item>}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#001529' }}>
                        <h1 style={{ color: 'white' }}>RESIDENT DATABASE</h1>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {this.state.logined === false
                            ? <LoginForm updateLogin={this.updateLogin} />
                            : this.state.role === 'XACTHUC' ?
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                    <ResidentDatabase {...this.props} username={this.state.username}
                                        password={this.state.username} role={this.state.role} />
                                </div>
                                : <WarningPage />
                        }
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Passport Demo ©2019</Footer>
                </Layout>
            </Layout>
        );
    }
}