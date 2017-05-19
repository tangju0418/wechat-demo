const {
  startupTypes
} = require('./startup.js')

const setStartup = (args) => {
  return (dispatch, getState) => {
    dispatch({ type: startupTypes.STARTUP, args })
  }
}


module.exports = {
  setStartup
}
