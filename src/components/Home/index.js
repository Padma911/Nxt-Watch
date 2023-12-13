import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchVideosContainer,
  SearchButton,
  RetryButton,
  BannerVideosContainer,
  NoVideosParagraph,
  VideosContainer,
  Loading,
  NoVideos,
  NoSearchResultsContainer,
  NoVideosStatement,
} from './styledComponents'
import VideoPreview from '../VideoPreview'
import Sidebar from '../Sidebar'
import Header from '../Header'
import BannerItem from '../BannerItem'
import ReactContext from '../../context/ReactContext'

const apiStatus = {
  initialState: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    search: '',
    status: apiStatus.initialState,
    videosList: [],
    close: false,
  }

  componentDidMount() {
    this.getVideosData()
  }

  closeBanner = () => {
    this.setState({close: true})
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
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log('home data', data)

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

  onSearchButton = () => {
    this.getVideosData()
  }

  onEnterKeyDown = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  changeSearchInputValue = event => {
    this.setState({search: event.target.value})
  }

  noSearchResults = darkMode => (
    <NoSearchResultsContainer data-testid="home">
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

  onRetry = () => {
    this.setState({search: ''}, this.getVideosData)
  }

  renderSearch = darkMode => {
    const {search} = this.state
    return (
      <SearchContainer darkMode={darkMode}>
        <SearchInput
          onChange={this.changeSearchInputValue}
          darkMode={darkMode}
          type="search"
          value={search}
          placeholder="Search"
          onKeyDown={this.onEnterKeyDown}
        />
        <SearchButton
          type="button"
          onClick={this.onSearchButton}
          data-testid="searchButton"
          darkMode={darkMode}
        >
          <SearchIcon darkMode={darkMode} />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderVideoPreviews = () => {
    const {videosList} = this.state

    return (
      <VideosContainer data-testid="home">
        {videosList.map(video => (
          <VideoPreview key={video.id} videoDetails={video} />
        ))}
      </VideosContainer>
    )
  }

  renderVideos = (darkMode, savedVideos) => {
    const {videosList} = this.state

    return (
      <SearchVideosContainer data-testid="home" darkMode={darkMode}>
        {this.renderSearch(darkMode)}
        {videosList.length === 0
          ? this.noSearchResults(darkMode)
          : this.renderVideoPreviews(savedVideos)}
      </SearchVideosContainer>
    )
  }

  renderCloseBanner = () => <BannerItem closeBanner={this.closeBanner} />

  renderOutput = (darkMode, savedVideos) => {
    const {close} = this.state
    return (
      <>
        <HomeContainer data-testid="home" darkMode={darkMode}>
          <Header />
          <Sidebar />
          <BannerVideosContainer darkMode={darkMode}>
            {!close && this.renderCloseBanner()}
            {this.renderStatus(darkMode, savedVideos)}
          </BannerVideosContainer>
        </HomeContainer>
      </>
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

  renderFailure = darkMode => {
    const src = darkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoSearchResultsContainer data-testid="home">
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

  renderStatus = (darkMode, savedVideos) => {
    const {status} = this.state

    switch (true) {
      case status === apiStatus.progress:
        return this.renderLoading(darkMode)
      case status === apiStatus.success:
        return this.renderVideos(darkMode, savedVideos)
      case status === apiStatus.failure:
        return this.renderFailure(darkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode, highlightedOption} = value

          return <div>{this.renderOutput(darkMode, highlightedOption)}</div>
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
