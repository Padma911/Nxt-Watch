import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  BannerVideosContainer,
  HomeContainer,
  SearchVideosContainer,
  NoSearchResultsContainer,
  NoVideos,
  NoVideosParagraph,
  VideosContainer,
  NoVideosStatement,
} from '../Home/styledComponents'
import {
  TrendingContainer,
  TrendingTitle,
  TrendingIcon,
} from '../Trending/styledComponents'

import VideoPreview from '../VideoPreview'

const SavedVideos = () => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode, savedVideos} = value

      console.log(savedVideos)

      const renderVideoPreviews = () => (
        <VideosContainer>
          {savedVideos.map(video => (
            <VideoPreview key={video.id} videoDetails={video} />
          ))}
        </VideosContainer>
      )

      const trendingContainer = () => (
        <TrendingContainer bgColor={darkMode ? '#212121' : '#d7dfe9'}>
          <TrendingIcon />
          <TrendingTitle color={darkMode ? 'white' : '#1e293b'}>
            Saved Videos
          </TrendingTitle>
        </TrendingContainer>
      )

      const noSearchResults = () => (
        <NoSearchResultsContainer>
          <NoVideos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosStatement color={darkMode ? 'white' : '7e858e'}>
            No saved videos found
          </NoVideosStatement>
          <NoVideosParagraph color={darkMode ? '#cccccc' : '#94a3b8'}>
            Save your videos by clicking a button
          </NoVideosParagraph>
        </NoSearchResultsContainer>
      )

      const renderVideos = () => (
        <SearchVideosContainer darkMode={darkMode}>
          {trendingContainer()}
          {savedVideos.length === 0 ? noSearchResults() : renderVideoPreviews()}
        </SearchVideosContainer>
      )

      const renderOutput = () => (
        <>
          <HomeContainer data-testid="savedVideos" darkMode={darkMode}>
            <Header />
            <Sidebar />
            <BannerVideosContainer darkMode={darkMode}>
              {renderVideos()}
            </BannerVideosContainer>
          </HomeContainer>
        </>
      )

      return renderOutput()
    }}
  </ReactContext.Consumer>
)

export default SavedVideos
