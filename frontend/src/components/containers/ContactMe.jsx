import React from "react";
import { Button, Input, Form } from "semantic-ui-react";

const ContactForm = () => (
  <Form action="https://formspree.io/xwkblzvr" method="POST">
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field
      id="form-input-control-error-email"
      control={Input}
      label="Email"
      placeholder="joe@schmoe.com"
      // error={{
      //   content: "Please enter a valid email address",
      //   pointing: "below"
      // }}
    />
    <Form.Field>
      <Form.TextArea label="Messages" placeholder="" />
    </Form.Field>
    <Button color="green" type="submit">
      Submit
    </Button>
  </Form>
);

export default ContactForm;
