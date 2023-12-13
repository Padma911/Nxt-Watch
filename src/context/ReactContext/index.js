import React from 'react'

const ReactContext = React.createContext({
  darkMode: true,
  highlightedOption: 'HOME',

  changeMode: () => {},
  likedVideos: [],

  updateLikeVideos: () => {},
  dislikedVideos: [],
  updateDislikedVideos: () => {},

  changeHighlightedOption: () => {},
  savedVideos: [],
  addSaveList: () => {},
})

export default ReactContext

/* 

Need to  add report  item  for every video 
Functionality :  should n't be  state value due to  refreshes each time  it is rendered 
Keep in Context  :  There will be a list of  videos which are reported, we will check each and every 
id  whether this id  is in reported videos list and we must present the status as well.

update that in  context : we must update  the  reported videos 
in the way of form  if the id is there remove it otherwise add it 

Add a icon element from react js third party packages. 
if the id is in it it gets to red otherwise it remains same color. s

Steps : 
1) Adding an icon 
2) In react Context add a reported videos : array
3) In react context add a updatereportedVideos: function
4)IN app.js write a function name reportedvideos updation and update it 
logic  if it is in   list  remove it or add it 
5) Give styling to icon based on reported id in videos or  not  


*/
