const Promise = require('../libs/promise.js')
const {
    isEmpty,
    wrapError,
    createError
} = require('../../core/common.js')
const {
    apiPath
} = require('../../core/settings.js');
const {
  initial
} = require('../modules/startup.js');


const combine = (path) => {
    if (path.indexOf('http://') > -1
        || path.indexOf('https://') > -1)
        return path
    return path.substr(0, 1) == '/'
        ? apiPath + path : apiPath + '/' + path;
}
const getToken = (path) => {
  const url = combine(path)
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer '
      },
      success: function (res) {
        console.log('GET', url, res)
        if (res.statusCode != 200)
          reject(createError(res.statusCode, res.data.Message))
        else if (res.data.Code != 0)
          reject(createError(res.data.Code, res.data.Message))
        else
          resolve(res.data)
      },
      fail: function (error) {
        console.warn('GET', url, error)
        reject(createError('fail', 'error'))
      }
    })
  })
}
const post = (path, data) => {
    const url = combine(path)
    let Authorization = isEmpty(initial.AccessToken) ? 'Bearer ' : ('Bearer '+ initial.AccessToken)
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: 'POST',
            data: data,
            header: {
                'content-type': 'application/json',
                'Authorization': Authorization
            },
            success: function (res) {
                console.log('POST', url, res)
                if (res.statusCode != 200)
                    reject(createError(res.statusCode, res.data.Message))
                else if (res.data.Code != 0)
                    reject(createError(res.data.Code, res.data.Message))
                else
                    resolve(res.data)
            },
            fail: function (error) {
                console.warn('POST', url, error)
                reject(createError('fail', 'error'))
            }
        })

    })
}

module.exports = {
  combine,
  getToken,
  post,
}