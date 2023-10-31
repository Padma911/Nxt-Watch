import styled from 'styled-components'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFacebook, FaTwitter} from 'react-icons/fa'

export const SideBarContainer = styled.div`
  width: 20vw;
  overflow-y: auto;
  height: 85vh;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
`
export const Icon = styled.img`
  margin-right: 20px;
  height: 30px;
  width: 30px;
`

export const TopContainer = styled.ul`
  display: flex;
  flex-grow: 1;
  height: 60vh;
  flex-direction: column;
`

export const BottomContainer = styled.div`
  padding-left: 40px;
`

export const ContactUs = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#383838'
  }};
`

export const SocialMediaElements = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BsLinkedinIcon = styled(AiFillLinkedin)`
  height: 50px;
  width: 50px;
  color: #00306e;
  border-radius: 25px;
  background-color: white;
  margin-right: 12px;
`
export const FacebookIcon = styled(FaFacebook)`
  height: 50px;
  width: 50px;
  background-color: #00306e;
  border-radius: 25px;
  color: white;
  margin-right: 12px;
`

export const TwitterIcon = styled(FaTwitter)`
  height: 50px;
  width: 50px;
  background-color: #3b82f6;
  border-radius: 25px;
  color: white;
  margin-right: 12px;
`

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #383838;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#383838'
  }};
`
