import styled from 'styled-components'

export const LiGameContainer = styled.li`
  list-style: none;
  width: 170px;
  padding: 15px;
  margin: 15px;
`

export const GameImage = styled.img`
  width: 150px;
  height: 170px;
  border-radius: 10px;
`

export const GameTitle = styled.h1`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 500;
`

export const GamePara = styled.p`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: 500;
`
