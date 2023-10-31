import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'

export const BannerContainer = styled.div`
  background-color: green;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  width: 100%;
  padding: 20px;
`

export const BannerLogoCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BannerLogo = styled.img`
  height: 40px;
  width: 130px;
  @media (min-width: 768px) {
    height: 55px;
    width: 150px;
  }
`

export const BannerPara = styled.p`
  font-size: 24px;
  color: '#475569';
  font-weight: 500;
  width: 50%;
`

export const CloseButton = styled.button`
  border: 0 none transparent;
  background-color: transparent;
`
export const CloseIcon = styled(IoMdClose)`
  height: 30px;
  width: 30px;
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  padding: 10px;
  height: 45px;
  width: auto;
  color: '#475569';
  font-weight: 600;
  font-size: 20px;
`
