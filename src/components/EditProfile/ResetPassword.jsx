import React from "react";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      password: "",
      confirmPassword: "",
      error: "",
      loading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("saksham");
    this.setState({ loading: true });
    if(this.state.loading) {
      console.log("garg");
    }
    // get current password from database and check it with current password if they does not match return ,then check password and confirm password if they does not match return,else update password in database.
    // console.log(this.state.loading);
    // if (this.state.password != this.state.confirmPassword) {
    //   this.setState({ error: "password does not match" });
    //   return;
    // }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Current Password
            <input
              name="currentPassword"
              type="password"
              value={this.state.currentPassword}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Confirm Password
            <input
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Reset password</button>
        </form>

        {this.loading && <h2>Loading...!!</h2>}
      </div>
    );
  }
}
export default ResetPassword;
