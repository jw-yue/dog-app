import {
    GET_DOG_AREAS_REQUEST,
    GET_DOG_AREAS_FAILURE,
    GET_DOG_AREAS_SUCCESS,
    UPLOAD_DOG_AREAS_REQUEST,
    UPLOAD_DOG_AREAS_FAILURE,
    UPLOAD_DOG_AREAS_SUCCESS,
    SUBMIT_DOG_AREAS_REQUEST,
    SUBMIT_DOG_AREAS_SUCCESS,
    SUBMIT_DOG_AREAS_FAILURE,
    SET_SUBMITTABLE_DOG_AREAS,
    UNSET_SUBMITTABLE_DOG_AREAS,
  } from '@actions/dogAreasActions'
  
  const getInitState = () => ({
    listDogAreas: undefined,
    dogAreaResponse: undefined,
    submitIsLoading: false,
    submitFailed: false,
    isFetching: false,
    success: false,
    isLoading: false,
    fetchFailed: false,
    submittableDogArea: undefined,
  })
  const DOGAreasReducer = (state = getInitState(), action) => {
    switch (action.type) {
      case GET_DOG_AREAS_REQUEST:
        return {
          ...state,
          isFetching: true,
          isLoading: true,
        }
      case GET_DOG_AREAS_FAILURE:
        return {
          ...state,
          isLoading: false,
          success: false,
          fetchFailed: true,
        }
      case GET_DOG_AREAS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isFetching: false,
          success: true,
          listDOGAreas: action.payload.data,
        }
      case UPLOAD_DOG_AREAS_REQUEST:
        return {
          ...state,
          isLoading: true,
        }
      case UPLOAD_DOG_AREAS_SUCCESS: {
        return {
          ...state,
          listDOGAreas: [],
          success: false,
          isLoading: false,
        }
      }
      case UPLOAD_DOG_AREAS_FAILURE:
        return {
          ...state,
          isLoading: false,
          fetchFailed: true,
  
        }
      case SUBMIT_DOG_AREAS_REQUEST:
        return {
          ...state,
          isLoading: true,
          fetchFailed: false,
        }
      case SUBMIT_DOG_AREAS_SUCCESS:
        return {
          ...state,
          success: true,
          isLoading: false,
          fetchFailed: false,
        }
      case SUBMIT_DOG_AREAS_FAILURE:
        return {
          ...state,
          isLoading: false,
          fetchFailed: true,
        }
      case SET_SUBMITTABLE_DOG_AREAS:
        return {
          ...state,
          submittableDOGArea: action.payload,
        }
      case UNSET_SUBMITTABLE_DOG_AREAS:
        return {
          ...state,
          submittableDOGArea: undefined,
        }
      default:
        return { ...state }
    }
  }
  export default DOGAreasReducer
  