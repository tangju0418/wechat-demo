const updeep = require('../libs/updeep.js');
const {
  isEmpty,
  createError,
  RequestStatus
} = require('../../core/common.js')

const IdentityTypes = {
  LOGIN: 'LOGIN',
}

const initial = {
  editor: {
    username: {
      value: '',
      invalid: false
    },
    password: {
      value: '',
      invalid: false
    }
  },
  username: '',
  accessToken: '',
  expiresIn: 0
}

try {
  initial.accessToken = wx.getStorageSync('identity.accessToken')
  initial.expiresIn = wx.getStorageSync('identity.expiresIn')
} catch (e) {
  console.error(createError(e))
}

const identity = (state = initial, action) => {
  let renew = state
  switch (action.type) {
    case IdentityTypes.LOGIN:
      const status = action.status
      const payload = action.payload
      switch (status) {
        case RequestStatus.process:
          renew = processLogin(state, payload)
          break
        case RequestStatus.success:
          renew = successLogin(state, payload)
          break
        case RequestStatus.failure:
          renew = failureLogin(state, payload)
          break
      }
      break
  }
  if (renew != state)
    return updeep(renew, state)

  return state
}

const processLogin = (state, payload) => {
  const username = payload.username
  const password = payload.password

  return {
    editor: {
      username: {
        value: username,
        invalid: isEmpty(username)
      },
      password: {
        value: password,
        invalid: isEmpty(password)
      }
    }
  }
}

const successLogin = (state, payload) => {
  const accessToken = payload.accessToken
  const expiresIn = payload.expiresIn

  try {
    wx.setStorageSync('identity.accessToken', accessToken)
    wx.setStorageSync('identity.expiresIn', expiresIn)
  } catch (e) {
    console.error(createError(e))
  }

  return {
    editor: initial.editor,
    username: state.editor.username.value,
    accessToken,
    expiresIn
  }
}

const failureLogin = (state, payload) => {
  return {
  }
}


module.exports = {
  IdentityTypes,
  identity
}
