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

const getAllowPassportState = (role) => {
    switch (role) {
        case 'XACTHUC':
            return 'CNFRM'
        case 'XETDUYET':
            return 'CHKNG'
        case 'LUUTRU':
            return 'ACCPT'
        default:
            return ''
    }
}

const getTableData = (rows) => {
    let columns = Object.keys(rows[0]);
    columns = columns.map(c => ({
        title: c,
        dataIndex: c,
        type: c
    }));
    let dataSource = rows;
    return { columns, dataSource };
}
const getTablesData = (tables) => {
    let ret = [];
    for (let k in tables) {
        let table = getTableData(tables[k]);
        ret.push({ tablename: k, table: table });
    }
    return ret;
}


export class ResidentDatabase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tables: []
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
            if (res.data.affected === 1) {
                this.setState({ dataSource: this.state.dataSource.filter(p => p.ID != ID) });
            }
        });
    }

    getData = () => {
        axios.post('http://localhost:3500/resident/database', {
            params: {
                username: this.props.username,
                password: this.props.password
            }
        }).then(res => {
            this.setState({ tables: res.data.data });
        });
    }

    render() {
        return getTablesData(this.state.tables).map(table =>
            <div>
                <h2>{table.tablename}</h2>
                <Table columns={table.table.columns} dataSource={table.table.dataSource}
                    pagination={{ pageSize: 15 }} style={{ overflow: 'hidden' }} />
            </div>)
    }
}