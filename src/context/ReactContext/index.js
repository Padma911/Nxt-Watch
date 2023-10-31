import React from 'react'

const ReactContext = React.createContext({
  darkMode: true,
  highlightedOption: 'HOME',

  changeMode: () => {},

  changeHighlightedOption: () => {},
  savedVideos: [],
  addSaveList: () => {},
})

export default ReactContext
