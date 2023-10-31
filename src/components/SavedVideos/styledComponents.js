import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#0f0f0f' : '#f9f9f9'
  }};