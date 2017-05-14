
const {
  tableTypes
} = require('./tableNum.js')

const setTableNum = (args) => {
  return (dispatch, getState) => {
    dispatch({ type: tableTypes.TABLE_NUM, args })
  }
}


module.exports = {
  setTableNum
}
