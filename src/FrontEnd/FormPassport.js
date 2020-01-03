import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Button, DatePicker } from 'antd';
import { provinces } from './../Data/provinces';
import { district } from './../Data/districts';
import { nations } from './../Data/nations';
import { religions } from './../Data/religions';
const axios = require('axios').default;


const { Option } = Select;

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      AddressProvince: null,
      StayingProvince: null,
      ApointmentProvince: null
    };
  }

  setAddressProvince = value => { this.setState({ AddressProvince: value }) }

  getDistrictByProvince = provinceid => district.filter(d => d.provinceid === provinceid)

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios.post("http://localhost:3500/passport/post",{
          params: values
        }).then(res => {
          console.log(res);
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
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

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="Fullname">
              {getFieldDecorator('fullname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Fullname!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Birthday!',
                  },
                ],
              })(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Birthplace">
              {getFieldDecorator('birthplace', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Birthplace!',
                  },
                ],
              })(<Select>
                {provinces.map(p => <Option value={p.name} key={p.value}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item label="Gender">
              {getFieldDecorator('gender', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Gender!',
                  }
                ],
              })(<Select>
                <Option value="1">Male</Option>
                <Option value="0">Female</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Nation">
              {getFieldDecorator('nation', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your nation'
                  }
                ]
              })(<Select>
                {nations.map(n => <Option value={n.name} key={n.value}>{n.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Religion">
              {getFieldDecorator('religion', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your religion'
                  }
                ]
              })(<Select>
                {religions.map(r => <Option value={r.name} key={r.value}>{r.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phonenumber', {
                rules: [{
                  required: true
                  , message: 'Please input your Phone Number!'
                }],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label={<span>Address Province&nbsp;
              <Tooltip title="write based on your Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('addprovince', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Address Province!'
                  }
                ]
              })(<Select onChange={value => this.setAddressProvince(value)}>
                {provinces.map(p => <Option key={p.value} value={p.value}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Address District&nbsp;
              <Tooltip title="write based on Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('adddistrict', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Address District!',
                  }
                ],
              })(<Select>
                {this.getDistrictByProvince(this.state.AddressProvince).map(d => <Option
                  key={d.value}
                  value={d.name}>
                  {d.name}
                </Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Address Detail&nbsp;
              <Tooltip title="write based on Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('adddetail', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Address Detail'
                  }
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label={
              <span>Father Name&nbsp;
              <Tooltip title="If you have father, you must input this field">
                  <Icon type="question-circle-o" />
                </Tooltip></span>
            }>
              {getFieldDecorator('fatherfullname')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label={<span>Mother's Fullname&nbsp;
              <Tooltip title="If you have mother, you must input this field">
                <Icon type="question-circle-o" />
              </Tooltip></span>}>
              {getFieldDecorator('motherfullname')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Receiving Organization">
              {getFieldDecorator('recievingorganization', {
                rules: [
                  {
                    required: true,
                    message: 'Please select receiving organization!'
                  },
                ],
              })(<Select onChange={value => this.setState({ ApointmentProvince: value })}>
                {provinces.map(p => <Option key={p.value} value={p.name}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Receiving Address">
              {getFieldDecorator('receivingaddress', {
                rules: [
                  {
                    required: true,
                    message: 'Please select receiving organization!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Form
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const FormPassport = Form.create({ name: 'register' })(RegistrationForm);
