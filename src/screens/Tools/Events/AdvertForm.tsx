import * as React from "react"
import { Form, Input, InputNumber, Checkbox, Button } from 'antd';
import moment from "moment"

class AdvertForm extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
        let targets = [{ email: "cmm4hf@mst.edu" }]
        const { data } = this.props;
        const body = {
          "from": {
            email: "acm-test-grp@mst.edu"
          },
          personalizations: [{
            to: targets,
            dynamic_template_data: {
              subject: values.subject,
              datetime: moment(data.dateHosted).format("dddd, MMMM Do [at] h:mmA"),
              flier: data.flierLink,
              host: data.hostSigs.name,
              eventTitle: data.eventTitle,
              location: data.location,
              description: data.description,
              link: data.eventLink
            }
          }],
          template_id: "d-02ffcf22e9304e59a8c72beb5f8528d7"
        }
        this.props.sendEvent(body)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label="Number of Flyers"
        >
          {getFieldDecorator('numFliers', { initialValue: 0 })(
            <InputNumber />
          )}
        </Form.Item>

        <Form.Item
          label="Subject Line"
        >
          {getFieldDecorator('subject')(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Email Groups"
        >
          {getFieldDecorator("emailGroups")(
            <Checkbox.Group style={{ width: "100%" }}>
              <div><Checkbox value="cstask">CS Task</Checkbox></div>
              <div><Checkbox value="members">ACM Members</Checkbox></div>
              <div><Checkbox value="acm">ACM</Checkbox></div>
              <div><Checkbox value="employment">ACM Employment</Checkbox></div>
              <div><Checkbox value="events">ACM Events</Checkbox></div>
            </Checkbox.Group>
          )}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default AdvertForm
