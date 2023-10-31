import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  padding: 15px;
  padding-left: 30px;
  justify-content: flex-start;
  align-items: center;
`
export const TrendingIcon = styled(HiFire)`
  height: 50px;
  width: 50px;
  color: #ff0000;
`

export const TrendingTitle = styled.h1`
  color: ${props => props.color};
  margin-left: 20px;
`
export const SearchVideosContainer = styled.div`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#0f0f0f' : '#f9f9f9'
  }};
`
