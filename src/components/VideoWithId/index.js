import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  ChannelName,
  SubscriberCount,
  LikeContainer,
  LikeIcon,
  Description,
  ChannelAndSubscriber,
  DislikeIcon,
  SaveIcon,
  LikeButton,
  LikePara,
  LikeViewCountContainer,
  HorizontalLine,
} from './styledComponents'
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
import {
  DetailsContainer,
  Title,
  ChannelContainer,
  ChannelImage,
  MoreDetailsPara,
  MoreDetails,
} from '../VideoPreview/styledComponents'

const apiStatus = {
  initialState: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoWithId extends Component {
  state = {
    dataObject: {},
    like: false,
    save: true,
    dislike: false,
    status: apiStatus.initialState,
  }

  componentDidMount() {
    this.getVideoData()
  }

  clickLikeButton = () => {
    const {like} = this.state
    if (like) {
      this.setState({like: false})
    } else {
      this.setState({dislike: false, like: true})
    }
  }

  onRetry = () => {
    this.getVideoData()
  }

  clickDislikeButton = () => {
    const {dislike} = this.state
    if (dislike) {
      this.setState({dislike: false})
    } else {
      this.setState({like: false, dislike: true})
    }
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
    } else {
      this.onFailure()
    }
  }

  renderVideoDetails = (darkMode, addSaveList, highlightedOption) => {
    const {dataObject, like, save, dislike} = this.state
    const {
      videoUrl,
      channel,
      description,

      publishedAt,
      title,
      viewCount,
    } = dataObject
    const width = '100%'
    const goOn = () => {
      addSaveList(dataObject, save)
    }

    const savedLists = () => {
      this.setState(
        prevState => ({
          save: !prevState.save,
        }),
        goOn(),
      )
    }
    let saves

    if (highlightedOption === 'SAVED') {
      saves = 'Saved'
    } else {
      saves = !save ? 'Saved' : 'Save'
    }

    return (
      <>
        <ReactPlayer url={videoUrl} width={width} />

        <DetailsContainer darkMode={darkMode}>
          <Title color={darkMode ? 'white' : '#424242'}>{title}</Title>
          <LikeViewCountContainer>
            <MoreDetails>
              <MoreDetailsPara color={darkMode ? '#cccccc' : '#606060'}>
                {viewCount}
              </MoreDetailsPara>
              <MoreDetailsPara color={darkMode ? '#cccccc' : '#606060'}>
                {publishedAt}
              </MoreDetailsPara>
            </MoreDetails>
            <LikeContainer>
              <LikeButton
                type="button"
                onClick={this.clickLikeButton}
                color={like ? '#4f46e5' : '#475569'}
              >
                <LikeIcon />
                <LikePara color={like ? '#4f46e5' : '#475569'}>Like</LikePara>
              </LikeButton>
              <LikeButton
                type="button"
                onClick={this.clickDislikeButton}
                color={dislike ? '#4f46e5' : '#475569'}
              >
                <DislikeIcon />
                <LikePara color={dislike ? '#2563eb' : '#64748b'}>
                  Dislike
                </LikePara>
              </LikeButton>
              <LikeButton
                onClick={savedLists}
                type="button"
                color={save ? '#2563eb' : '#64748b'}
              >
                <SaveIcon />
                <LikePara color={!save ? '#2563eb' : '#64748b'}>
                  {saves}
                </LikePara>
              </LikeButton>
            </LikeContainer>
          </LikeViewCountContainer>
          <HorizontalLine />
          <ChannelContainer>
            <ChannelImage alt="channel logo" src={channel.profile_image_url} />
            <ChannelAndSubscriber>
              <ChannelName color={darkMode ? '#f1f1f1' : '#1e293b'}>
                {channel.name}
              </ChannelName>
              <SubscriberCount color={darkMode ? '#7e858e' : '#909090'}>
                {channel.subscriber_count} subscribers
              </SubscriberCount>
              <Description color={darkMode ? '#f1f1f1' : '#606060'}>
                {description}
              </Description>
            </ChannelAndSubscriber>
          </ChannelContainer>
        </DetailsContainer>
      </>
    )
  }

  renderStatus = (darkMode, addSaveList, highlightedOption) => {
    const {status} = this.state

    switch (true) {
      case status === apiStatus.progress:
        return this.renderLoading(darkMode)
      case status === apiStatus.success:
        return this.renderVideoDetails(darkMode, addSaveList, highlightedOption)
      case status === apiStatus.failure:
        return this.renderFailure(darkMode)
      default:
        return null
    }
  }

  renderOutput = (darkMode, addSaveList, highlightedOption) => (
    <HomeContainer data-testid="videoItemDetails" darkMode={darkMode}>
      <Header />
      <Sidebar />
      <BannerVideosContainer>
        {this.renderStatus(darkMode, addSaveList, highlightedOption)}
      </BannerVideosContainer>
    </HomeContainer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode, addSaveList, savedVideos, highlightedOption} = value
          console.log('saved_list: ', savedVideos)
          return this.renderOutput(darkMode, addSaveList, highlightedOption)
        }}
      </ReactContext.Consumer>
    )
  }
}

export default VideoWithId
