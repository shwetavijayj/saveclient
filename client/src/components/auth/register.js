import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password1: "",
            password2: "",
            errors: {}
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeVal(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2
        }
        console.log("New user", newUser);
        console.log("Request dispatching");
        this.props.registerUser(newUser);
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div className="register">
                {user ? user.username : null}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={this.state.username} onChange={this.onChangeVal.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChangeVal.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password1" value={this.state.password1} onChange={this.onChangeVal.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChangeVal.bind(this)} />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToprops = (state) => ({
    auth: state.auth
})
export default connect(mapStateToprops, { registerUser })(register);
