import React from 'react';
import { Row, Col } from 'antd';
import { FormPassport } from './FormPassport';

export class FormPage extends React.Component {
    render() {
        return <Row>
            <Col span={4}></Col>
            <Col span={16} style={{ marginTop: "2em", marginBottom: "2em" }}>
                <FormPassport {...this.props} />
            </Col>
            <Col span={4}></Col>
        </Row>
    }
}