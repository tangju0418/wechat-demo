const {createStore, compose, applyMiddleware} = require('./libs/redux.js');
const {Provider, connect} = require('./libs/wechat-weapp-redux.js');
//const devTools = require('./libs/remote-redux-devtools.js').default;
const createLogger = require('./libs/redux-logger');
const logger = createLogger();
const thunkMiddleware = require('./libs/redux-thunk.js').default;

const reducers = require('./reducers.js')

function configureStore() {
  return createStore(reducers, applyMiddleware(thunkMiddleware, logger));
}
// function configureStore() {
//   return createStore(reducer, compose(devTools({
//     hostname: 'localhost',
//     port: 6700,
//     secure: false
//   })));
// }

module.exports = {configureStore, Provider, connect};
