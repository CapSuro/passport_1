import React from 'react';
import { Table, Tag, Button, Divider, Popconfirm } from 'antd';



const axios = require('axios');


const getDecorateState = (state) => {
    switch (state) {
        case 'CNFRM':
            return <Tag color="green">{state}</Tag>
        case 'CHKNG':
            return <Tag color="red">{state}</Tag>
        case 'ACCPT':
            return <Tag color="black">{state}</Tag>
        case 'SAVED':
            return <Tag color="blue">{state}</Tag>
        default:
            return <Tag color="orange">{state}</Tag>
    }
}

export class PassportRegistration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [],
            dataSource: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    acceptState = (state, ID) => {
        axios.post('http://localhost:3500/passportadmin/accept', {
            params: {
                ID: ID,
                state: state,
                username: this.props.username,
                password: this.props.password
            }
        }).then(res => {
            if (res.data.affected === 1) {
                this.setState({ dataSource: this.state.dataSource.filter(p => p.ID != ID) });
            }
        });
    }

    denyState = (state, ID) => {
        axios.post('http://localhost:3500/passportadmin/deny', {
            params: {
                ID: ID,
                state: state,
                username: this.props.username,
                password: this.props.password
            }
        }).then(res => {
            console.log(res)
        });
    }

    getData = () => {
        axios.post('http://localhost:3500/passportadmin/getdata', {
            params: {
                username: this.props.username,
                password: this.props.password
            }
        }).then(res => {
            let data = res.data;
            let columns = Object.keys(data[0]).map(k => {
                if (k === 'BIRTHDAY') {
                    return ({
                        title: k,
                        type: k,
                        dataIndex: k,
                        render: b => <span>{b.substring(0, 10)}</span>
                    })
                }
                else if (k === 'STATE') {
                    return ({
                        title: k,
                        type: k,
                        dataIndex: k,
                        render: (s, record) => <span>{getDecorateState(s)}
                            <Divider type="vertical" />
                            <Popconfirm title="Sure to Accept"
                                onConfirm={() => this.acceptState(s, record.ID)}>
                                <Button type="primary" >Accept</Button>
                            </Popconfirm>
                            <Divider type="vertical" />
                            <Popconfirm title="Sure to Deny"
                                onConfirm={() => this.acceptState(s, record.ID)}>
                                <Button type="danger">Deny</Button>
                            </Popconfirm>
                        </span>,
                        width: 300
                    })
                }
                else {
                    return ({
                        title: k,
                        type: k,
                        dataIndex: k,
                    })
                }
            });
            this.setState({ dataSource: data, columns: columns });
        });
    }

    render() {
        return <Table style={{ overflowX: 'scroll' }}
            columns={this.state.columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 15 }} />
    }
}