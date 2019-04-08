import * as React from "react"
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';

const { RangePicker } = DatePicker;

class EventForm extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { patchEvent } = this.props;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        patchEvent(values)
      }
    });
  }

  render() {
    const { editData, editing } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label="ID"
        >
          {getFieldDecorator('id', {
            initialValue: editData.id,
            required: !editing
          })(
            <InputNumber />
          )}
        </Form.Item>
        <Form.Item
          label="Name"
        >
          {getFieldDecorator('eventTitle', {
            initialValue: editData.eventTitle,
            required: !editing
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Description"
        >
          {getFieldDecorator('description', {
            initialValue: editData.description,
            required: !editing
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Location"
        >
          {getFieldDecorator('location', {
            initialValue: editData.location,
            required: !editing
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Flier Address"
        >
          {getFieldDecorator('flierLink', {
            initialValue: editData.flierLink,
            rules: [{
              type: 'url', message: 'The input is not a valid URL.',
            },
              {
              required: !editing, message: 'Please input your E-mail!',
            }]
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Event Link"
          extra="Website, form, or other link to event."
        >
          {getFieldDecorator('eventLink', {
            initialValue: editData.eventLink,
            rules: [{
              type: 'url', message: 'The input is not a valid URL.',
            }]
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Date and Time"
        >
          {getFieldDecorator('test', {
            rules: [{ type: 'array', required: !editing }],
          })(
            <RangePicker showTime format="MM-DD-YYYY HH:mm:ss" />
          )}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default EventForm
