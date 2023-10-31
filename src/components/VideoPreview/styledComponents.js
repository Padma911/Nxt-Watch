import styled from 'styled-components'

export const LiContainer = styled.li`
  margin: 10px;
  list-style: none;
  @media (min-width: 576px) {
    width: 30%;
  }

  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
`

export const Thumbnail = styled.img`
  width: 100%;

  height: 300px;
`

export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 15px;
  @media (min-width: 576px;) {
    display: ${props => props.savedVideos};
    flex-direction: row;
  }
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 35px;
  margin-top: 20px;

  margin-right: 10px;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
`
export const MoreDetails = styled.div`
  display: flex;
`

export const MoreDetailsPara = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.color};
  margin-right: 10px;
`
