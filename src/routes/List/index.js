import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'list/:id',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ListContainer',
      './modules/list'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
       will not loaded until the router invokes this callback. */
      const List = require('./containers/ListContainer').default
      const listReducer = require('./modules/list').default
      injectReducer(store, {
        key: 'list',
        reducer: listReducer
      })

      next(null, List)
    })
  }
})
