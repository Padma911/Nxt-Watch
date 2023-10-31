import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ReactContext from '../../context/ReactContext'

import {
  LiContainer,
  Thumbnail,
  ChannelContainer,
  ChannelImage,
  DetailsContainer,
  Title,
  MoreDetails,
  MoreDetailsPara,
} from './styledComponents'

const VideoPreview = props => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode, highlightedOption} = value
      console.log(highlightedOption, 'highli')
      const {videoDetails} = props
      const {
        id,
        thumbnailUrl,
        channel,
        title,
        viewcount,
        publishedAt,
      } = videoDetails
      const published = formatDistanceToNow(new Date(publishedAt))

      return (
        <LiContainer darkMode={darkMode} highlightedOption={highlightedOption}>
          <Link to={`/videos/${id}`}>
            <Thumbnail
              highlightedOption={highlightedOption}
              src={thumbnailUrl}
              alt="video thumbnail"
            />
            <ChannelContainer highlightedOption={highlightedOption}>
              <ChannelImage
                alt="channel logo"
                src={channel.profile_image_url}
              />
              <DetailsContainer darkMode={darkMode}>
                <Title color={darkMode ? 'white' : '#424242'}>{title}</Title>
                <MoreDetails>
                  <MoreDetailsPara color={darkMode ? '#cccccc' : '#606060'}>
                    {channel.name}
                  </MoreDetailsPara>
                  <MoreDetailsPara color={darkMode ? '#cccccc' : '#606060'}>
                    {viewcount}
                  </MoreDetailsPara>
                  <MoreDetailsPara color={darkMode ? '#cccccc' : '#606060'}>
                    {published}
                  </MoreDetailsPara>
                </MoreDetails>
              </DetailsContainer>
            </ChannelContainer>
          </Link>
        </LiContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default VideoPreview
