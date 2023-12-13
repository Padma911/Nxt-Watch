import ReactPlayer from 'react-player'
import ReactContext from '../../context/ReactContext'

import {
  DetailsContainer,
  Title,
  ChannelContainer,
  ChannelImage,
  MoreDetailsPara,
  MoreDetails,
} from '../VideoPreview/styledComponents'
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
} from '../VideoWithId/styledComponents'

const VideoViewPage = props => (
  <ReactContext.Consumer>
    {value => {
      const {
        likedVideos,
        dislikedVideos,
        updateLikeVideos,
        updateDislikedVideos,
        savedVideos,
        addSaveList,

        darkMode,
      } = value

      const {dataObject, id} = props

      let like

      if (likedVideos.includes(id)) {
        like = true
      } else {
        like = false
      }
      const dislike = dislikedVideos.includes(id)

      const clicksLikeButton = () => {
        if (like) {
          console.log(id, 'viewpage')
          updateLikeVideos(id)
        } else {
          if (dislike) {
            updateDislikedVideos(id)
          }
          updateLikeVideos(id)
        }
      }

      /*
      like true ayithae dislike false
      once check the status of dislike 
      dislike true ayndhi anuko 
      dhanini false cheyi
      update chesae 
      */
      const clicksDislikeButton = () => {
        if (dislike) {
          updateDislikedVideos(id, dislike)
        } else {
          if (like) {
            updateLikeVideos(id, like)
          }
          updateDislikedVideos(id, dislike)
        }
      }
      const savedVideo = savedVideos.filter(each => each.id === id)
      const save = savedVideo.length !== 0
      const savesLists = () => {
        addSaveList(dataObject, id)
      }

      const {
        videoUrl,
        channel,
        description,

        publishedAt,
        title,
        viewCount,
      } = dataObject
      const width = '100%'

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
                  onClick={clicksLikeButton}
                  color={like ? '#4f46e5' : '#475569'}
                >
                  <LikeIcon />
                  <LikePara color={like ? '#4f46e5' : '#475569'}>Like</LikePara>
                </LikeButton>
                <LikeButton
                  type="button"
                  onClick={clicksDislikeButton}
                  color={dislike ? '#4f46e5' : '#475569'}
                >
                  <DislikeIcon />
                  <LikePara color={dislike ? '#2563eb' : '#64748b'}>
                    Dislike
                  </LikePara>
                </LikeButton>
                <LikeButton
                  onClick={savesLists}
                  type="button"
                  color={save ? '#2563eb' : '#64748b'}
                >
                  <SaveIcon />
                  <LikePara color={save ? '#2563eb' : '#64748b'}>
                    {!save ? 'Save' : 'Saved'}
                  </LikePara>
                </LikeButton>
              </LikeContainer>
            </LikeViewCountContainer>
            <HorizontalLine />
            <ChannelContainer>
              <ChannelImage
                alt="channel logo"
                src={channel.profile_image_url}
              />
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
    }}
  </ReactContext.Consumer>
)

export default VideoViewPage
