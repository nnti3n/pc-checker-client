import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/recent',
  getComponent (nextState, next) {
    require.ensure([
      './containers/RecentContainer',
      './modules/recent'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
       will not loaded until the router invokes this callback. */
      const Recent = require('./containers/RecentContainer').default
      const recentReducer = require('./modules/recent').default
      injectReducer(store, {
        key: 'recent',
        reducer: recentReducer
      })
      next(null, Recent)
    })
  }
})
