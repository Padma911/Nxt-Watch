import styled from 'styled-components'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

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

export const HiFireIcon = styled(HiFire)`
  width: 30px;
  height: 30px;
  margin-left: 50px;
  text-decoration: none;
  color: ${props => {
    const {darkMode, highlight} = props
    if (highlight) {
      return '#ff0000'
    }
    return darkMode ? '#909090' : 'black'
  }};
  @media (min-width: 768px) {
    margin-left: 0px;
  }
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  width: 30px;
  height: 30px;
  margin-left: 50px;
  text-decoration: none;
  color: ${props => {
    const {darkMode, highlight} = props
    if (highlight) {
      return '#ff0000'
    }
    return darkMode ? '#909090' : 'black'
  }};
  @media (min-width: 768px) {
    margin-left: 0px;
  }
`
export const RiMenuAddLineIcon = styled(RiMenuAddLine)`
  width: 30px;
  height: 30px;
  margin-left: 50px;
  text-decoration: none;
  color: ${props => {
    const {darkMode, highlight} = props
    if (highlight) {
      return '#ff0000'
    }
    return darkMode ? '#909090' : 'black'
  }};
  @media (min-width: 768px) {
    margin-left: 0px;
  }
`

export const IconText = styled.h1`
  font-size: 17px;
  color: #383838;
  margin-left: 5px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#383838'
  }};
  @media (min-width: 768px) {
    margin-left: 14px;
    font-weight: bold;
  }
`
