import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ReactContext from './context/ReactContext'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import VideoWithId from './components/VideoWithId'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    darkMode: false,
    search: '',
    highlightedOption: 'HOME',
    savedVideos: [],
    dislikedVideos: [],
    likedVideos: ['30b642bd-7591-49f4-ac30-5c538f975b15'],
  }

  updateDislikedVideos = id => {
    const {dislikedVideos} = this.state
    if (dislikedVideos.includes(id)) {
      const updatedVideos = dislikedVideos.filter(each => each !== id)

      this.setState({dislikedVideos: updatedVideos})
    } else {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.dislikedVideos, id],
      }))
    }
  }

  updateLikeVideos = id => {
    const {likedVideos} = this.state
    console.log('udate app')

    if (likedVideos.includes(id)) {
      const updatedVideos = likedVideos.filter(each => each !== id)

      this.setState({likedVideos: updatedVideos})
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
  }

  changeMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  changeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  changeHighlightedOption = id => {
    console.log(id)
    this.setState({highlightedOption: id})
  }

  changeSavedVideos = (dataObject, id) => {
    const {savedVideos} = this.state
    const dataObjects = {...dataObject, id}
    const filt = savedVideos.filter(each => each.id === id)
    if (filt.length === 0) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, dataObjects],
      }))
    } else {
      const filterList = savedVideos.filter(each => each.id !== dataObject.id)
      this.setState({savedVideos: filterList})
    }
  }

  render() {
    const {
      darkMode,
      search,
      dislikedVideos,
      highlightedOption,
      savedVideos,
      likedVideos,
    } = this.state
    console.log('search', search, 'app', likedVideos)
    return (
      <ReactContext.Provider
        value={{
          darkMode,
          search,
          dislikedVideos,
          likedVideos,
          savedVideos,
          updateDislikedVideos: this.updateDislikedVideos,
          updateLikeVideos: this.updateLikeVideos,
          addSaveList: this.changeSavedVideos,
          changeSearchInput: this.changeSearchInput,
          changeMode: this.changeMode,
          highlightedOption,
          changeHighlightedOption: this.changeHighlightedOption,
        }}
      >
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/videos/:id" exact component={VideoWithId} />
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/trending" exact component={Trending} />
          <ProtectedRoute path="/gaming" exact component={Gaming} />
          <ProtectedRoute path="/saved-videos" exact component={SavedVideos} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
