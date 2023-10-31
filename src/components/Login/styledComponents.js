import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: 'Roboto';
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : 'white'
  }};
`
export const LoginContainer = styled.div`
  padding: 25px;
  border-radius: 8px;
  width: auto;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#000000' : 'white'
  }};
  @media (screen and min-width: 768px) {
    width: 900px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const LogoImage = styled.img`
  width: auto;
  @media (screen and min-width: 768px) {
    width: 200px;
  }
  height: 60px;
`

export const FormContainer = styled.form``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (screen and min-width: 768px) {
    width: 400px;
  }
  margin-top: 40px;
`
export const Label = styled.label`
  color: ${props => {
    const {darkMode} = props
    console.log('styledComponents : ', darkMode)
    return darkMode ? 'white' : '#64748b'
  }};
  font-weight: ${props => (props.darkMode === true ? 300 : 'bold')};
  font-size: 20px;
`

export const Input = styled.input`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#212121' : 'white'
  }};

  color: #64748b;
  font-size: 19px;
  padding: 13px;
  margin: 10px;
  border: 2 solid #64748b;
`

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Checkbox = styled.input`
  width: 30px;
  height: 30px;
`

export const CheckboxLabel = styled.label`
  font-size: 22px;
  margin-left: 10px;
  font-weight: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#000000'
  }};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 10px;
  color: #ffffff;
  width: 100%;
  margin-top: 30px;
  height: 55px;
  font-size: 22px;
  font-weight: bold;
  border: 0 none transparent;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 20px;
`
