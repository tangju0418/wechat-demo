const Promise = require('../libs/promise.js')
const {
  wrapError,
  createError,
  RequestStatus
} = require('../../core/common.js')
const {
  IdentityTypes
} = require('./identity.js')
const {
  combine,
  post
} = require('../base/http.js')

const login = (status, payload) => ({
  type: IdentityTypes.LOGIN,
  status,
  payload
})

const checkInvalid = (getState) => {
  const editor = getState().identity.editor
  return editor.username.invalid || editor.password.invalid
}

const loginAsync = (username, password) => {
  return (dispatch, getState) => {
    return new Promise(function (resolve, reject) {
      dispatch(login(RequestStatus.process, { username, password }))
      if (checkInvalid(getState)) {
        reject(createError('invalid', '数据输入不正确'))
        return
      }

      const data = {
        ClientId: `user`,
        ClientSecret: 'web',
        Username: username,
        Password: password
      }
      post('passport/get-token', data)
        .then(function (data) {
          const accessToken = data.Data.AccessToken
          const expiresIn = data.Data.ExpiresIn
          const payload = { accessToken, expiresIn }

          dispatch(login(RequestStatus.success, payload))
          resolve(payload)
        })
        .catch(function (error) {
          dispatch(login(RequestStatus.failure, {}))
          reject(error)
        })

      // wx.login({
      //   success: function (res) {
      //     console.log('loginAsync:success', res)
      //     if (res.code) {
      //       wx.getUserInfo({
      //         success: function (res) {
      //           console.log('res', res)
      //         }
      //       })
      //       dispatch(login({ username, password }))
      //       resolve()
      //     } else {
      //       reject(createError('login', res.errMsg))
      //     }

      //   },
      //   fail: function (res) {
      //     console.log('loginAsync:fail', res)
      //     reject(createError('login', res.errMsg))
      //   }
      // })


    })
  }
}

module.exports = {
  loginAsync
}
