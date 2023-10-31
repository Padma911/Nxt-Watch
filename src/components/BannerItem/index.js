import {
  BannerContainer,
  BannerLogoCloseContainer,
  BannerLogo,
  CloseButton,
  CloseIcon,
  BannerPara,
  GetItNowButton,
} from './styledComponents'

const BannerItem = props => {
  const {closeBanner} = props
  const closingBanner = () => {
    closeBanner()
  }

  return (
    <BannerContainer data-testid="banner">
      <BannerLogoCloseContainer>
        <BannerLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <CloseButton data-testid="close" type="button" onClick={closingBanner}>
          <CloseIcon />
        </CloseButton>
      </BannerLogoCloseContainer>
      <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
      <GetItNowButton>GET IT NOW</GetItNowButton>
    </BannerContainer>
  )
}

export default BannerItem
