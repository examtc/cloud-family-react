import { GET_LIST,UPDATE_LIST,PRISE } from './actionType'

export const getAction = (data) => {
      return {
        type: GET_LIST,
        data
  }
}
export const updateAction = (data) => {
    return {
      type: UPDATE_LIST,
      data
}
}
export const priseAction = (data) => {
    return {
      type: PRISE,
      data
}
}
