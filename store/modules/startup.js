const updeep = require('../libs/updeep.js');
const startupTypes = {
  STARTUP: 'STARTUP'
}

const initial = {
  AccessToken: ''
}
try {
  initial.AccessToken = wx.getStorageSync('repast.accessToken')
} catch (e) {
  console.error(createError(e))
}

const startup = (state = initial, action) => {
  let renew = state
  switch (action.type) {
    case startupTypes.STARTUP:
      let arg = action.args
      console.log('startup-redux:', arg)
      renew.AccessToken = arg
      break;
  }
  if (renew != state)
    return updeep(renew, state)
  return state
}


module.exports = {
  startupTypes,
  startup,
  initial
}
