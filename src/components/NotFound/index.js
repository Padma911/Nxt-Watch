import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  NoSearchResultsContainer,
  NoVideos,
  HomeContainer,
  BannerVideosContainer,
  NoVideosParagraph,
  NoVideosStatement,
} from '../Home/styledComponents'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode} = value
      const src = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      const renderVideos = () => (
        <NoSearchResultsContainer>
          <NoVideos src={src} alt="not found" />
          <NoVideosStatement color={darkMode ? 'white' : '7e858e'}>
            Page Not Found
          </NoVideosStatement>
          <NoVideosParagraph color={darkMode ? '#cccccc' : '#94a3b8'}>
            We are sorry, the page you requested could not be found
          </NoVideosParagraph>
        </NoSearchResultsContainer>
      )

      return (
        <HomeContainer data-testid="saved-videos" darkMode={darkMode}>
          <Header />
          <Sidebar />
          <BannerVideosContainer darkMode={darkMode}>
            {renderVideos()}
          </BannerVideosContainer>
        </HomeContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default NotFound
