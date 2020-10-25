import React from "react";
import emailjs from "emailjs-com";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";

import { env } from "../config";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    formSubmitted: "send",
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
    this.setState({ formSubmitted: "send" });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = this.state;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: message,
    };

    emailjs
      .send("Chisomprince", env.TEMPLATEID, templateParams, env.USERID)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    this.setState({
      name: "",
      email: "",
      message: "",
      formSubmitted: "sent",
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20,
        }}
      >
        <form style={{ width: "70%" }} onSubmit={this.handleSubmit}>
          <Typography variant="h3" align="center">
            Contact Me
          </Typography>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input
              id="message"
              multiline
              rows={10}
              onChange={this.handleChange}
              value={this.state.message}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            align="center"
            onClick={this.handleSubmit}
          >
            {this.state.formSubmitted}
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
