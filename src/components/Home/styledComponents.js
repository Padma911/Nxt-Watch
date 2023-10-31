import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
  height: auto;
`
export const BannerVideosContainer = styled.div`
  width: 100vw;

  overflow-y: auto;
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : 'white'
  }};
  height: auto;
  @media (min-width: 768px) {
    width: 80vw;
    height: 85vh;
    overflow-y: auto;
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 100vw;

  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : '#f4f4f4'
  }};
  padding: 10px;
  @media (min-width: 576px) {
    width: 75vw;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#424242' : 'white'
  }};
  padding: 5px;
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#606060'
  }};
  border-color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#606060'
  }};
  flex-grow: 1;
`
export const SearchButton = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${props => {
    const {darkMode} = props
    return darkMode ? 'white' : '#606060'
  }};
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#606060' : '#ebebeb'
  }};
`

export const SearchIcon = styled(AiOutlineSearch)`
  width: 30px;
  margin-left: 50px;
  margin-right: 50px;
  height: 30px;
  color: ${props => {
    const {darkMode} = props
    return darkMode ? '#909090' : '#7e858e'
  }};
`
export const SearchVideosContainer = styled.div`
  background-color: ${props => {
    const {darkMode} = props
    return darkMode ? '#181818' : '#f9f9f9'
  }};
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
 
  }
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`
export const NoVideos = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

export const NoVideosStatement = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const NoVideosParagraph = styled.p`
  color: ${props => props.color};
  font-size: 18px;
`

export const RetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  padding: 10px;
  width: 100px;
  border: 0 none transparent;
  border-radius: 5px;
  height: 40px;
`
