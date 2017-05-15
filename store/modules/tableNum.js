const updeep = require('../libs/updeep.js');
const {
  wrapError,
  createError,
  isEmpty
} = require('../../core/common.js')
const tableTypes = {
  TABLE_NUM: 'TABLE_NUM'
}

const initial = {
  Num: '2'
}

const tableNum = (state = initial, action) => {
  let renew = state
  switch (action.type) {
    case tableTypes.TABLE_NUM:
      let arg = action.args
      console.log('table-redux:', arg)
      renew.Num = arg
      break;
  }
  if (renew != state)
    return updeep(renew, state)
  return state
}


module.exports = {
  tableTypes,
  tableNum
}
