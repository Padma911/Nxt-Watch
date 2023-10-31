import {Link} from 'react-router-dom'
import {LiGameContainer, GameImage, GamePara} from './styledComponents'
import ReactContext from '../../context/ReactContext'

const Game = props => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode} = value

      const {videoDetails} = props
      const {thumbnailUrl, viewcount, title, id} = videoDetails

      return (
        <LiGameContainer>
          <Link to={`/videos/${id}`}>
            <GameImage src={thumbnailUrl} alt="video thumbnail" />
            <GamePara color={darkMode ? '#f1f1f1' : '#212121'}>
              {title}
            </GamePara>
            <GamePara color={darkMode ? '#64748b' : '#606060'}>
              {viewcount} Watching
              <br />
              Worldwide
            </GamePara>
          </Link>
        </LiGameContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default Game
