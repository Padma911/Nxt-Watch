import styled from 'styled-components'

import {SiYoutubegaming} from 'react-icons/si'

export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  height: 50px;
  width: 50px;
  color: #ff0000;
`
export const SearchVideosContainer = styled.div`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#0f0f0f' : '#f9f9f9'
  }};
`
