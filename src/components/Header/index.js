import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import ReactPopupMenu from '../ReactPopupMenu'
import {
  BiSunIcon,
  LogoutButton,
  LogoContainer,
  Logo,
  Profile,
  GiNightSleepIcon,
  MenuElement,
  ElementsContainer,
  LogoutElement,
  ButtonsContainer,
  LogoutContainer,
  LogoutQuestion,
  LogoutText,
  MenuContainer,
  Buttons,
  ConfirmButton,
  CloseButtonContainer,
  CloseButton,
  CloseIcon,
  OptionsContainer,
} from './styledComponents'
import ReactContext from '../../context/ReactContext'

const Header = props => {
  const overlayStyles = {
    backgroundColor: 'transparent',
  }
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    console.log(history)
    console.log('history', history)
    history.replace('/login')
  }
  const overlayStyless = {
    backgroundColor: '#ffff',
  }
  const OptionsList = [
    {
      id: 'HOME',
      text: 'Home',
      link: '/',
      dataTestid: 'home',
    },
    {
      id: 'TRENDING',
      text: 'Trending',
      link: '/trending',
      dataTestid: 'trending',
    },
    {
      id: 'GAMING',
      text: 'Gaming',
      link: '/trending',
      dataTestid: 'gaming',
    },
    {
      id: 'SAVED',
      text: 'Saved videos',
      link: '/saved-videos',
      dataTestid: 'saved',
    },
  ]

  const render = (darkMode, changeMode) => {
    const changeTheMode = () => {
      changeMode()
    }

    const src = darkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    const dayIcon = darkMode ? <BiSunIcon /> : <GiNightSleepIcon />
    return (
      <LogoContainer darkMode={darkMode}>
        <Link to="/">
          <Logo src={src} alt="website logo" />
        </Link>

        <ElementsContainer>
          <CloseButton data-testid="theme" onClick={changeTheMode}>
            {dayIcon}
          </CloseButton>

          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <div>
            <Popup
              modal
              trigger={<MenuElement darkMode={darkMode} />}
              overlayStyle={overlayStyless}
            >
              {close => (
                <MenuContainer darkMode={darkMode}>
                  <CloseButtonContainer>
                    <CloseButton darkMode={darkMode} onClick={() => close()}>
                      <CloseIcon />
                    </CloseButton>
                  </CloseButtonContainer>
                  <OptionsContainer>
                    {OptionsList.map(each => (
                      <Link to={each.link}>
                        <ReactPopupMenu each={each} key={each.id} />
                      </Link>
                    ))}
                  </OptionsContainer>
                </MenuContainer>
              )}
            </Popup>
          </div>
          <div>
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  Logout
                </button>
              }
            >
              {close => (
                <>
                  <LogoutContainer darkMode={darkMode}>
                    <LogoutQuestion darkMode={darkMode}>
                      Are you sure you want to logout
                    </LogoutQuestion>
                    <ButtonsContainer>
                      <Buttons darkMode={darkMode} onClick={() => close()}>
                        Cancel
                      </Buttons>
                      <ConfirmButton onClick={logout}>Confirm</ConfirmButton>
                    </ButtonsContainer>{' '}
                  </LogoutContainer>
                </>
              )}
            </Popup>
          </div>
          <div>
            <Popup
              modal
              trigger={<LogoutElement darkMode={darkMode} />}
              overlayStyle={overlayStyles}
            >
              {close => (
                <LogoutContainer darkMode={darkMode}>
                  <LogoutQuestion darkMode={darkMode}>
                    Are you sure, you want to logout
                  </LogoutQuestion>
                  <ButtonsContainer>
                    <Buttons darkMode={darkMode} onClick={() => close()}>
                      Cancel
                    </Buttons>
                    <ConfirmButton onClick={logout}>Confirm</ConfirmButton>
                  </ButtonsContainer>
                </LogoutContainer>
              )}
            </Popup>
          </div>
        </ElementsContainer>
      </LogoContainer>
    )
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {darkMode, changeMode} = value
        return render(darkMode, changeMode)
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(Header)
