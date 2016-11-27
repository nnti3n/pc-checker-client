import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/part',
  getComponent (nextState, next) {
    require.ensure([
      './containers/PartContainer',
      './modules/part'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Part = require('./containers/PartContainer').default
      const partReducer = require('./modules/part').default
      injectReducer(store, {
        key: 'part',
        reducer: partReducer
      })
      next(null, Part)
    })
  }
})
