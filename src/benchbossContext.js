import React from 'react'

const BenchbossContext = React.createContext({
  folders: [],
  notes: [],
  filterFolders: () => {},
  findFolder: () => {},
  filterNotes: () => {},
  findNote: () => {},
  deleteNote: () => {},
  addFolder: () => {},
  addNote: () => {}

})

export default BenchbossContext