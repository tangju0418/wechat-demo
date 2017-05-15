const updeep = require('../libs/updeep.js');
const tableTypes = {
  TABLE: 'TABLE'
}

const initial = {
  Items: [
    { Id: 1, Name: '梅'},
    { Id: 2, Name: '兰' },
    { Id: 3, Name: '竹' },
    { Id: 4, Name: '菊' }
  ]
}

const table = (state = initial, action) => {
  let renew = state
  switch (action.type) {
    case tableTypes.TABLE:
      let arg = action.args
      console.log('table-redux:', arg)
      renew.Items = arg
      break;
  }
  if (renew != state)
    return updeep(renew, state)
  return state
}


module.exports = {
  tableTypes,
  table
}
