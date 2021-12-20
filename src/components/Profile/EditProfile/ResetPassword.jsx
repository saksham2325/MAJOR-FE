import React from "react";

import { Button } from "@mui/material";
import { connect } from "react-redux";
import { toastErrorMsg } from "constants/messages";

import { updatePassword } from 'actions/editProfile';


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    const id = localStorage.getItem('id');
    this.state = {
      id: id,
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true})
    if (this.state.password != this.state.confirmPassword) {
      this.setState({error: toastErrorMsg.PASSWORD_AND_CONFIRM_PASSWORD_SHOULD_BE_SAME})
      this.setState({loading: false})
      return;
    }
    this.props.updatePassword(this.state);
    this.setState({loading: false})
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
          <Button type="submit" variant="contained">
            Reset password
          </Button>
        </form>
        {this.state.error && <h2 className='alert'>{this.state.error}</h2>}
        {this.props.alert && <h2 className='alert'>{this.props.alert}</h2>}
        {this.state.loading && <h2>Loading...!!</h2>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alertReducer.userUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  updatePassword: (body) => {
    dispatch(updatePassword(body));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
