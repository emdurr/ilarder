import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';
import logoImg from '../../images/ilarder_logo.png';
import { handleLogin, handleFacebookLogin } from './actions';
import FacebookLogin from 'react-facebook-login';

const styles = {
  inForm: { border: '1px solid grey', borderRadius: '8px', padding: '15px',
            marginTop:' 15px', boxShadow: '10px 10px 5px #888888' },
  cbtn: { margin: '20px', backgroundColor: 'transparent'},
  lhead: { backgroundColor: '#3B4743', padding: '15px', color: 'white'},
  formstyle: { margin: '25px', padding: '10px'}
}


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: false, redirectRoute: '/' }
  }

  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let passwordConf = this.refs.passwordConf.value;
    this.props.dispatch(
      handleSignup(firstName, lastName, email, password, passwordConf, this.state.redirectRoute, this.props.history)
    )
  }

  responseFacebook = (auth) => {
    let name = auth.name.split(" ");
    let firstName = name[0];
    let lastName = name[1];
    this.props.dispatch(handleFacebookLogin(auth, firstName, lastName, this.props.history));
  }

  render() {
    return (
      <div className='container'>
        <div className='card'>
          <h3 style={ styles.lhead }><img src={ logoImg }/> Sign Up</h3>
          <form style={ styles.formstyle } onSubmit={this.handleSubmit}>
            <input ref="firstName" required placeholder="First Name (Required)" />
            <input ref="lastName" required placeholder="Last Name (Required)" />
            <input ref="email" required placeholder="Email (Required)" />
            <input ref="password" type="password" required placeholder="Password (Required)" />
            <input ref="passwordConf" type="password" required placeholder="Re-Enter Password" />
            <button style={ styles.cbtn } type="submit" className="btn black-text">Sign Up</button>
            <div   style={ styles.cbtn }>
              <FacebookLogin
                appId='1175197775871367'
                autoLoad={false}
                fields='name, email'
                cssClass='btn blue'
                icon='fa-facebook'
                callback={this.responseFacebook}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Signup);
