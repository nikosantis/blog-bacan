import { UPDATED, LOADING, ERROR, UPDATED_COM, LOADING_COM, ERROR_COM } from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
  loading_com: false,
  error_com: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATED:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: ''
      }

    case LOADING:
      return { ...state, loading: true }

    case ERROR:
      return { ...state, error: action.payload, loading: false }

    case UPDATED_COM:
      return {
        ...state,
        posts: action.payload,
        loading_com: false,
        error_com: ''
      }

    case LOADING_COM:
      return { ...state, loading_com: true }

    case ERROR_COM:
      return { ...state, error_com: action.payload, loading_com: false }

    default: return state
  }
}
