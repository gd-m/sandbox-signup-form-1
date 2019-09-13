import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div class="signup">
        <div class="signupform-wrapper">
          <form class="signup-form">
            <input class="form-input" type="text" placeholder="First Name" />
            <br />
            <input class="form-input" type="text" placeholder="Last Name" />
            <br />
            <input class="form-input" type="text" placeholder="Email Address" />
            <br />
            <input class="form-input" type="text" placeholder="Password" />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
