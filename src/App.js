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

  changeSavedVideos = (dataObject, save) => {
    if (save) {
      const {savedVideos} = this.state
      const isIn = savedVideos.filter(each => each.id === dataObject.id)
      if (isIn.length === 0) {
        this.setState(prevState => ({
          savedVideos: [...prevState.savedVideos, dataObject],
        }))
      }
    } else {
      const {savedVideos} = this.state
      const filterList = savedVideos.filter(each => each.id !== dataObject.id)
      this.setState({savedVideos: filterList})
    }
  }

  render() {
    const {darkMode, search, highlightedOption, savedVideos} = this.state
    console.log('search', search)
    return (
      <ReactContext.Provider
        value={{
          darkMode,
          search,
          savedVideos,
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
