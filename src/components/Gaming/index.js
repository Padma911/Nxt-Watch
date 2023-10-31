import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Game from '../Game'

import {SiYoutubegamingIcon, SearchVideosContainer} from './styledComponents'

import {TrendingContainer, TrendingTitle} from '../Trending/styledComponents'
import {
  HomeContainer,
  BannerVideosContainer,
  VideosContainer,
  Loading,
  NoSearchResultsContainer,
  NoVideos,
  NoVideosStatement,
  NoVideosParagraph,
  RetryButton,
} from '../Home/styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    status: apiStatus.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  changeIntoCamelCase = object => ({
    id: object.id,
    channel: object.channel,
    publishedAt: object.published_at,
    thumbnailUrl: object.thumbnail_url,
    title: object.title,
    viewcount: object.view_count,
  })

  onSuccessApi = videosList => {
    this.setState({videosList, status: apiStatus.success})
  }

  onFailureApi = () => {
    this.setState({status: apiStatus.failure})
  }

  getVideosData = async () => {
    this.setState({status: apiStatus.progress})

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/gaming`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    console.log(url)
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.status === 200) {
      const videoObject = data.videos
      const videosList = videoObject.map(eachObject =>
        this.changeIntoCamelCase(eachObject),
      )
      console.log('videosList', videosList)
      this.onSuccessApi(videosList)
    } else {
      console.log(data.error_msg)
      this.onFailureApi()
    }
  }

  renderVideoPreviews = () => {
    const {videosList} = this.state

    return (
      <VideosContainer>
        {videosList.map(video => (
          <Game key={video.id} videoDetails={video} />
        ))}
      </VideosContainer>
    )
  }

  noSearchResults = darkMode => (
    <NoSearchResultsContainer>
      <NoVideos
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosStatement color={darkMode ? 'white' : '7e858e'}>
        No Search results found
      </NoVideosStatement>
      <NoVideosParagraph color={darkMode ? '#cccccc' : '#94a3b8'}>
        Try different key words or remove search filter
      </NoVideosParagraph>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </NoSearchResultsContainer>
  )

  trendingContainer = darkMode => {
    console.log(darkMode)
    return (
      <TrendingContainer bgColor={darkMode ? '#212121' : '#d7dfe9'}>
        <SiYoutubegamingIcon />
        <TrendingTitle color={darkMode ? 'white' : '#1e293b'}>
          Gaming
        </TrendingTitle>
      </TrendingContainer>
    )
  }

  renderFailure = darkMode => {
    const src = darkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoSearchResultsContainer>
        <NoVideos src={src} />
        <NoVideosStatement color={darkMode ? 'white' : '7e858e'}>
          Oops! Something Went Wrong
        </NoVideosStatement>
        <NoVideosParagraph color={darkMode ? '#cccccc' : '#94a3b8'}>
          We are having some trouble to complete your request. Please try again.
        </NoVideosParagraph>
        <RetryButton type="button" onClick={this.onRetry}>
          Retry
        </RetryButton>
      </NoSearchResultsContainer>
    )
  }

  renderVideos = darkMode => {
    const {videosList} = this.state
    console.log('videos', darkMode)
    return (
      <SearchVideosContainer darkMode={darkMode}>
        {this.trendingContainer(darkMode)}
        {videosList.length === 0
          ? this.noSearchResults(darkMode)
          : this.renderVideoPreviews(darkMode)}
      </SearchVideosContainer>
    )
  }

  renderLoading = darkMode => (
    <Loading className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={darkMode ? 'white' : 'black'}
        height="50"
        width="50"
      />
    </Loading>
  )

  renderStatus = darkMode => {
    const {status} = this.state
    console.log('status', darkMode)

    switch (true) {
      case status === apiStatus.progress:
        return this.renderLoading(darkMode)
      case status === apiStatus.success:
        return this.renderVideos(darkMode)
      case status === apiStatus.failure:
        return this.renderFailure(darkMode)
      default:
        return null
    }
  }

  renderOutput = darkMode => (
    <>
      <HomeContainer data-testid="gaming" darkMode={darkMode}>
        <Header />
        <Sidebar />
        <BannerVideosContainer darkMode={darkMode}>
          {this.renderStatus(darkMode)}
        </BannerVideosContainer>
      </HomeContainer>
    </>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode} = value

          return this.renderOutput(darkMode)
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Gaming
