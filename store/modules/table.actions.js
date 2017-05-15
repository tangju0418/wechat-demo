const {
  tableTypes
} = require('./table.js')

const setTable = (args) => {
  return (dispatch, getState) => {
    dispatch({ type: tableTypes.TABLE, args })
  }
}


module.exports = {
  setTable
}
