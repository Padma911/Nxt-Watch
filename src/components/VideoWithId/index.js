import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoViewPage from '../VideoViewPage'

import {
  NoSearchResultsContainer,
  NoVideos,
  HomeContainer,
  NoVideosStatement,
  BannerVideosContainer,
  NoVideosParagraph,
  Loading,
  RetryButton,
} from '../Home/styledComponents'

const apiStatus = {
  initialState: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  id: '',
}

class VideoWithId extends Component {
  state = {
    dataObject: {},

    status: apiStatus.initialState,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onRetry = () => {
    this.getVideoData()
  }

  changeIntoCamelCase = object => ({
    description: object.description,
    id: object.id,
    publishedAt: object.published_at,
    channel: object.channel,
    thumbnailUrl: object.thumbnail_url,
    title: object.title,
    videoUrl: object.video_url,
    viewCount: object.view_count,
  })

  onSuccess = detailsObject => {
    this.setState({dataObject: detailsObject, status: apiStatus.success})
  }

  onFailure = () => {
    this.setState({status: apiStatus.failure})
  }

  renderFailure = darkMode => {
    const src = darkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoSearchResultsContainer>
        <NoVideos src={src} alt="failure view" />
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

  getVideoData = async () => {
    this.setState({
      status: apiStatus.progress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    console.log(url)

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const detailsObject = this.changeIntoCamelCase(data.video_details)
      console.log(detailsObject)
      this.onSuccess(detailsObject)
      this.setState({id})
    } else {
      this.onFailure()
    }
  }

  renderVideoDetails = () => {
    const {dataObject, id} = this.state

    return (
      <>
        <VideoViewPage dataObject={dataObject} id={id} />
      </>
    )
  }

  renderStatus = darkMode => {
    const {status} = this.state

    switch (true) {
      case status === apiStatus.progress:
        return this.renderLoading(darkMode)
      case status === apiStatus.success:
        return this.renderVideoDetails(darkMode)
      case status === apiStatus.failure:
        return this.renderFailure(darkMode)
      default:
        return null
    }
  }

  renderOutput = darkMode => (
    <HomeContainer data-testid="videoItemDetails" darkMode={darkMode}>
      <Header />
      <Sidebar />
      <BannerVideosContainer>
        {this.renderStatus(darkMode)}
      </BannerVideosContainer>
    </HomeContainer>
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

export default VideoWithId
