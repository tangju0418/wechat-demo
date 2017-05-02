const wrapError = (error, message, data = []) => {
  if (message == null) message = error.message;
  return createError(error.name, message, data)
}

const createError = (name, message, data = []) => {
  return {
    name,
    message,
    data
  }
}

/*
console.log('var value =>', isEmpty(null))//true
console.log('var value = "" =>', isEmpty(""))//true
console.log('var value = "   " =>', isEmpty(" "))//true
console.log('var value = {} =>', isEmpty({}))//true
console.log("var value = { name: 'jm' } =>", isEmpty({ name: 'jm' }))//false
console.log('var value = [] =>', isEmpty([]))//true
console.log('var value = [1] =>', isEmpty([1]))//false
*/
const isEmpty = (value) => {
  return value == null || value == '' ||
    (typeof value === 'string' && value.trim() == '') ||
    (typeof value === 'object' && !hasProperty(value)) ||
    (typeof value === 'array' && value.length == 0)
}

const hasProperty = (obj) => {
  for (var prop in obj) {
    return true
  }
  return false
}

const RequestStatus = {
  undefine: 0,
  invalid: 1,
  process: 2,
  success: 3,
  failure: 4,
}

module.exports = {
  wrapError,
  createError,
  isEmpty,
  hasProperty,
  RequestStatus
}
