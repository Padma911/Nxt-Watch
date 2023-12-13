import styled from 'styled-components'
import {GiNightSleep, GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
  width: 100vw;
  height: 15vh;
`

export const Logo = styled.img`
  width: 120px;
  height: 30px;
  @media (min-width: 576px) {
    width: 140px;
    height: 35px;
  }
  @media (min-width: 768px) {
    width: 150px;
    height: 40px;
  }
`

export const ElementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const GiNightSleepIcon = styled(GiNightSleep)`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  @media (min-width: 576px) {
    height: 35px;
    width: 35px;
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
`

export const MenuElement = styled(GiHamburgerMenu)`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : 'black'
  }};
  @media (min-width: 576px) {
    height: 35px;
    width: 35px;
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutElement = styled(FiLogOut)`
  height: 30px;
  width: 30px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : 'black'
  }};
  @media (min-width: 576px) {
    height: 35px;
    width: 35px;
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutContainer = styled.div`
  padding: 20px;
  box-shadow: 1 1 green;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 8px;
  width: 300px;
  font-weight: 600;

  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : 'white'
  }};
  @media (min-width: 768px) {
    width: 500px;
    height: 200px;
  }
`

export const LogoutQuestion = styled.p`
  font-size: 22px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#212121'
  }};
  @media (min-width: 768px) {
    font-size: 28px;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Buttons = styled.button`
  height: 50px;
  width: 100px;
  padding: 10px;
  font-size: 20px;
  margin-right: 20px;
  background-color: transparent;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? '#cccccc' : '#424242'
  }};
  border-color: #cccccc;
`

export const ConfirmButton = styled(Buttons)`
  background-color: #3b82f6;
  color: white;
  border: 0 none transparent;
`

export const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : 'white'
  }};
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  border: 0 none transparent;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : 'black'
  }};
  text-decoration: none;
`

export const CloseIcon = styled(IoMdClose)`
  height: 50px;
  width: 50px;
`

export const OptionsContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`
export const OptionContainer = styled.li`
  display: flex;
  flex-direction: row;
  text-align: start;
  width: 100vw;
  padding-left: 20px;

  list-style: none;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => {
    const {highlight, darkMode} = props
    if (darkMode) {
      return highlight ? '#606060' : 'transparent'
    }

    return highlight ? '#f1f5f9' : 'transparent'
  }};
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const HomeIcon = styled(AiFillHome)`
  width: 30px;
  height: 30px;
  color: ${props => {
    const {darkMode, highlight} = props
    if (highlight) {
      return '#ff0000'
    }
    return darkMode ? '#909090' : 'black'
  }};
  margin-left: 50px;
  text-decoration: none;
  @media (min-width: 768px) {
    margin-left: 0px;
  }
`
export const BiSunIcon = styled(BiSun)`
  width: 30px;
  height: 30px;
  color: white;
  margin-right: 12px;
  @media (min-width: 576px) {
    height: 40px;
    width: 40px;
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }
`
export const Profile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
export const LogoutButton = styled(Buttons)`
  font-weight: bold;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#3b82f6'
  }};
  border-color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#3b82f6'
  }};
`
export const LogoutText = styled.h1`
  font-size: 15px;
`
