import React from 'react';
import { Form, Input, Icon, Button, Divider, Tag } from 'antd';
import { Table } from 'antd';

const axios = require('axios');


const TableColumns = [
    {
        title: 'ID',
        key: 'ID',
        dataIndex: 'ID',
        key: 'ID',
    },
    {
        title: 'FULLNAME',
        key: 'FULLNAME',
        dataIndex: 'FULLNAME',
        key: 'FULLNAME',
    },
    {
        title: 'GENDER',
        key: 'GENDER',
        dataIndex: 'GENDER',
        key: 'GENDER',
        render: gender => <span>{gender == '0' ? 'Female' : 'Male'}</span>
    },
    {
        title: 'BIRTHDAY',
        key: 'BIRTHDAY',
        dataIndex: 'BIRTHDAY',
        key: 'BIRTHDAY',
        render: birthday => <span>{birthday.substring(0, 10)}</span>
    },
    {
        title: 'BIRTHPLACE',
        key: 'BIRTHPLACE',
        dataIndex: 'BIRTHPLACE',
        key: 'BIRTHPLACE',
    },
    {
        title: 'NATION',
        key: 'NATION',
        dataIndex: 'NATION',
        key: 'NATION',
    },
    {
        title: 'RELIGION',
        key: 'RELIGION',
        dataIndex: 'RELIGION',
        key: 'RELIGION',
    },
    {
        title: 'PHONENUMBER',
        key: 'PHONENUMBER',
        dataIndex: 'PHONENUMBER',
        key: 'PHONENUMBER',
    },
    {
        title: 'ADDPROVINCE',
        key: 'ADDPROVINCE',
        dataIndex: 'ADDPROVINCE',
        key: 'ADDPROVINCE',
    },
    {
        title: 'ADDDISTRICT',
        key: 'ADDDISTRICT',
        dataIndex: 'ADDDISTRICT',
        key: 'ADDDISTRICT',
    },
    {
        title: 'ADDADDRESS',
        key: 'ADDADDRESS',
        dataIndex: 'ADDADDRESS',
        key: 'ADDADDRESS',
    },
    {
        title: 'FATHERNAME',
        key: 'FATHERNAME',
        dataIndex: 'FATHERNAME',
        key: 'FATHERNAME',
    },
    {
        title: 'MOTHERNAME',
        key: 'MOTHERNAME',
        dataIndex: 'MOTHERNAME',
        key: 'MOTHERNAME',
    },
    {
        title: 'APOPROVINCE',
        key: 'APOPROVINCE',
        dataIndex: 'APOPROVINCE',
        key: 'APOPROVINCE',
    },
    {
        title: 'STATE',
        key: 'STATE',
        dataIndex: 'STATE',
        key: 'STATE',
        render: state => <span><Tag color="green">{state}</Tag></span>
    },
]

class MonitorPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passports: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post("http://localhost:3500/passport/search", {
                    params: values
                }).then(res => {
                    this.setState({ passports: res.data });
                    const { form } = this.props;
                    form.resetFields();
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('searchkey', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Search Key!',
                            },
                        ],
                    })(<Input
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="your name"
                    />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{ marginLeft: '10em', transform: 'translateX(-50%)' }}>
                        Search
                    </Button>
                </Form.Item>
            </Form>
            <Divider />
            <Tag color="red">Result</Tag>
            <Table style={{ marginTop: "2em", overflow: "scroll" }} columns={TableColumns}
                dataSource={this.state.passports}></Table>
        </div >
    }
}

export const MonitorPage = Form.create({ name: 'search' })(MonitorPageComponent);