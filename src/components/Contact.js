import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      nameError: "",
      messageError: "",
      initialName: true,
      initialMessage: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.validateName(name, value);
  }

  validateName(name, value) {
    if (name === "name") {
      this.setState({
        nameError:
          value.length > 2 ? "" : "Name must be longer than 2 characters",
        initialName: false
      });
    } else {
      this.setState({
        messageError:
          value.length > 10 ? "" : "Message must be longer than 10 characters",
        initialMessage: false
      });
    }
  }

  getMailLink = () => {
    return (
      "mailto:kasaluoqi@gmail.com?subject=Mail from My site&body=From " +
      this.state.name +
      ":%0d%0a" +
      this.state.message.split("\n").join("%0d%0a")
    );
  };
  render() {
    return (
      <div style={{ background: "rgb(233, 240, 245)" }}>
        <div
          className="container border-container align-items-center justify-content-between "
          style={{ minHeight: "100vh", height: "100%" }}
          id={this.props.id}
        >
          <h1 className="center-horizontal p-5">Contact Me</h1>

          <div className="form-group">
            <div className="name-block wow fadeIn">
              <input
                className={`form-control ${
                  this.state.nameError ? "is-invalid" : ""
                }`}
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Your Name *"
                required="required"
                data-validation-required-message="Please enter your name."
              />
              <div className="invalid-feedback">{this.state.nameError}</div>
            </div>
            <div className="message-block wow fadeIn">
              <textarea
                className={`form-control ${
                  this.state.messageError ? "is-invalid" : ""
                }`}
                rows="10"
                name="message"
                placeholder="Your Message *"
                value={this.state.message}
                onChange={this.handleChange}
                required="required"
                data-validation-required-message="Please enter a message."
              ></textarea>
              <div className="invalid-feedback">{this.state.messageError}</div>
            </div>
            <div className="text-center">
              <a
                id="sendMessageButton"
                className={`btn btn-primary btn-lg text-uppercase ${
                  this.state.messageError + this.state.nameError
                    ? "disabled"
                    : this.state.initialName || this.state.initialMessage
                    ? "disabled"
                    : ""
                }`}
                href={this.getMailLink()}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
