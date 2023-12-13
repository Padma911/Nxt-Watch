import {Link} from 'react-router-dom'

import ReactContext from '../../context/ReactContext'
import {HomeIcon, CloseButton} from '../Header/styledComponents'
import {
  OptionContainer,
  HiFireIcon,
  RiMenuAddLineIcon,
  SiYoutubegamingIcon,
  IconText,
} from './styledComponents'

const ReactPopupMenu = props => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode, highlightedOption, changeHighlightedOption} = value
      const {each} = props

      const {id, text} = each

      let highlight
      switch (true) {
        case highlightedOption === id:
          highlight = true
          break
        default:
          highlight = false
      }

      let icon
      let routeTo

      switch (true) {
        case id === 'HOME':
          icon = <HomeIcon darkMode={darkMode} highlight={highlight} />
          routeTo = '/'
          break
        case id === 'TRENDING':
          icon = <HiFireIcon darkMode={darkMode} highlight={highlight} />
          routeTo = '/trending'
          break
        case id === 'GAMING':
          icon = (
            <SiYoutubegamingIcon darkMode={darkMode} highlight={highlight} />
          )
          routeTo = '/gaming'
          break
        case id === 'SAVED':
          icon = <RiMenuAddLineIcon darkMode={darkMode} highlight={highlight} />
          routeTo = '/saved-videos'
          break

        default:
          icon = null
      }

      const changeHighlightOne = () => {
        changeHighlightedOption(id)
      }

      return (
        <Link to={routeTo}>
          <OptionContainer darkmode={darkMode} highlight={highlight}>
            {icon}

            <CloseButton onClick={changeHighlightOne}>
              <IconText>{text}</IconText>
            </CloseButton>
          </OptionContainer>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default ReactPopupMenu
