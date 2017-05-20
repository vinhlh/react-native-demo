import { createAction } from 'redux-actions'

import types from './types'

const pushRoute = createAction(types.PUSH_ROUTE)
const popRoute = createAction(types.POP_ROUTE)

export default {
  pushRoute,
  popRoute
}
