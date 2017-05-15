
const {
  tableNumTypes
} = require('./tableNum.js')

const setTableNum = (args) => {
  return (dispatch, getState) => {
    dispatch({ type: tableNumTypes.TABLE_NUM, args })
  }
}


module.exports = {
  setTableNum
}
