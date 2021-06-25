import React from "react";
import "./ContactForm.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", subject: "", message: "" };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  render() {
    return (
      <div className="contactFormContainer">
        <form className="contactForm">
          <div className="nameEmailWrapper">
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.onNameChange}
              value={this.state.name}
              placeholder="Name"
              className="contactFormElement contactFormName"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.onEmailChange}
              value={this.state.email}
              placeholder="Email"
              className="contactFormElement contactFormEmail"
              required
            />
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={this.onSubjectChange}
            value={this.state.subject}
            placeholder="Subject"
            className="contactFormElement contactFormMessage"
            required
          />
          <textarea
            id="message"
            name="message"
            onChange={this.onMessageChange}
            placeholder="Message"
            rows="5"
            required
            value={this.state.message}
            className="contactFormElement contactFormMessage"
            required
          />
          <input
            type="button"
            value="Submit"
            onClick={this.handleSubmit}
            className="contactFormBtn"
          />
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const serviceId = "service_vy93ca1";
    const templateId = "template_s9u9v4y";

    let error = [];

    if (this.state.name === "") {
      error += "name";
      document.getElementsByName("name")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.email === "") {
      error += "email";
      document.getElementsByName("email")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.subject === "") {
      error += "subject";
      document.getElementsByName("subject")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.message === "") {
      error += "message";
      document.getElementsByName("message")[0].placeholder =
        "Please fill this field";
    }

    if (error == "") {
      this.sendMessage(serviceId, templateId, {
        subject: this.state.subject,
        message: this.state.message,
        from_name: this.state.name,
        reply_to: this.state.email,
      });
    } else {
      console.log(error);
    }
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  sendMessage(serviceId, templateId, variables) {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.resetForm();
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
