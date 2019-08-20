import { CHANGE } from './action-types'
export const change = (name) => {
    return {
      type: CHANGE,
      payload : name
    }
  }