import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';
import Messages from '../Messages';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    // NEED TO FIGURE OUT HOW TO INCORPORATE
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // password: PropTypes.string.isRequired
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.dispatch(signup(this.state.name, this.state.email, this.state.password));
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  handleTwitter() {
    this.props.dispatch(twitterLogin())
  }

  handleGoogle() {
    this.props.dispatch(googleLogin())
  }


  render() {
    console.log('here are the props in Register: ', this.state);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
            <div className="login-container">
              <div className="panel">
                <div className="panel-body">
                  <Messages messages={this.props.messages}/>
                  <form /*onSubmit={this.handleSignup.bind(this)}*/>
                    <legend>Create an account</legend>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" placeholder="Name" autoFocus className="form-control" value={this.state.name} /*onChange={this.handleChange.bind(this)}*//>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder="Email" className="form-control" value={this.state.email} /*onChange={this.handleChange.bind(this)}*//>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} /*onChange={this.handleChange.bind(this)}*//>
                    </div>
                    <div className="form-group">
                      <small className="text-muted"> By signing up, you agree to the <a href='/login'>Terms of Service </a>.</small>
                    </div>
                    <button type="submit" className="btn btn-success">Create an account</button>
                  </form>
                  <div className="hr-title"><span>or</span></div>
                  <div className="btn-toolbar text-center">
                    <button /*onClick={this.handleFacebook.bind(this)}*/ className="btn btn-facebook">Sign in with Facebook</button>
                    <button /*onClick={this.handleTwitter.bind(this)}*/ className="btn btn-twitter">Sign in with Twitter</button>
                    <button /*onClick={this.handleGoogle.bind(this)}*/ className="btn btn-google">Sign in with Google</button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center">
              Already have an account? <a href='/login'><strong>Log in</strong></a>
            </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);