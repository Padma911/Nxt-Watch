import {Link} from 'react-router-dom'

import {
  SideBarContainer,
  TopContainer,
  BottomContainer,
  ContactUs,
  SocialMediaElements,
  Icon,
  Paragraph,
} from './styledComponents'
import ReactPopupMenu from '../ReactPopupMenu'
import ReactContext from '../../context/ReactContext'
import Menu from '../Menu'

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
const Sidebar = () => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <SideBarContainer darkMode={darkMode}>
          <TopContainer>
            {OptionsList.map(each => (
              <Link to={each.link}>
                <ReactPopupMenu key={each.id} each={each} />
              </Link>
            ))}
          </TopContainer>
          <BottomContainer>
            <ContactUs darkMode={darkMode}>CONTACT US</ContactUs>
            <SocialMediaElements>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaElements>
            <Paragraph darkMode={darkMode}>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </BottomContainer>
        </SideBarContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default Sidebar
