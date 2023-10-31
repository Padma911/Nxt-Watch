import styled from 'styled-components'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'

export const LikeContainer = styled.div`
  padding: 10px;
  text-align: right;
  display: flex;
`
export const LikeIcon = styled(BiLike)`
  height: 30px;
  width: 30px;
`
export const DislikeIcon = styled(BiDislike)`
  height: 30px;
  width: 30px;
`
export const SaveIcon = styled(RiPlayListAddLine)`
  height: 30px;
  width: 30px;
  color: #475569;
`

export const LikeButton = styled.button`
  border: 0 none transparent;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`
export const LikePara = styled.p`
  color: ${props => props.color};
  margin-left: 10px;
  font-size: 20px;
`
export const LikeViewCountContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const HorizontalLine = styled.hr`
  width: 100%;
`

export const ChannelAndSubscriber = styled.div``

export const ChannelName = styled.p`
  color: ${props => props.color};
`

export const SubscriberCount = styled.p`
  color: ${props => props.color};
`
export const Description = styled.p`
  color: ${props => props.color};
`
