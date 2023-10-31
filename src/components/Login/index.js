import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'
import {
  LoginBgContainer,
  LoginContainer,
  LogoContainer,
  LogoImage,
  FormContainer,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    onFailed: false,
    errMsg: '',
    checked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  isCheckboxTriggered = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errMsg => {
    this.setState({errMsg, onFailed: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderLogin = () => (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value

        const {username, password, checked, onFailed, errMsg} = this.state

        const src = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <LoginBgContainer darkMode={darkMode}>
            <LoginContainer darkMode={darkMode}>
              <LogoContainer>
                <LogoImage alt="website logo" src={src} />
              </LogoContainer>
              <FormContainer>
                <InputContainer>
                  <Label darkMode={darkMode} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    darkMode={darkMode}
                    onChange={this.onChangeUsername}
                    id="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer>
                  <Label darkMode={darkMode} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    darkMode={darkMode}
                    onChange={this.onChangePassword}
                    id="password"
                    value={password}
                    type={checked ? 'text' : 'password'}
                    placeholder="Password"
                  />
                </InputContainer>
                <CheckboxContainer>
                  <Checkbox
                    id="showPassword"
                    onClick={this.isCheckboxTriggered}
                    type="checkbox"
                  />
                  <CheckboxLabel darkMode={darkMode} htmlFor="showPassword">
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>

                <LoginButton type="submit" onClick={this.submitForm}>
                  Login
                </LoginButton>
                {onFailed && <ErrorMsg>*{errMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          </LoginBgContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLogin()
  }
}

export default Login
