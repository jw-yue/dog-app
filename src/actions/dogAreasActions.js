export const UPLOAD_DOG_AREAS_SUCCESS = 'SET_DOG_AREAS_SUCCESS'
export const UPLOAD_DOG_AREAS_REQUEST = 'SET_DOG_AREAS_REQUEST'
export const UPLOAD_DOG_AREAS_FAILURE = 'SET_DOG_AREAS_FAILURE'

export const GET_DOG_AREAS_SUCCESS = 'SET_DOG_AREAS_SUCCESS'
export const GET_DOG_AREAS_REQUEST = 'SET_DOG_AREAS_REQUEST'
export const GET_DOG_AREAS_FAILURE = 'SET_DOG_AREAS_FAILURE'

export const SUBMIT_DOG_AREAS_REQUEST = 'SET_DOG_AREAS_REQUEST'
export const SUBMIT_DOG_AREAS_SUCCESS = 'SET_dOG_AREAS_SUCCESS'
export const SUBMIT_DOG_AREAS_FAILURE = 'SET_DOG_AREAS_FAILURE'

export const SET_SUBMITTABLE_DOG_AREAS = 'SET_SUBMITTABLE_DOG_AREAS'
export const UNSET_SUBMITTABLE_DOG_AREAS = 'UNSET_SUBMITTABLE_DOG_AREAS'

export const loadDogAreas = () => ({
    type: GET_DOG_AREAS_REQUEST,
  })
  export const successDogAreas = (dogAreas) => ({
    type: GET_DOG_AREAS_SUCCESS,
    payload: dogAreas,
  })
  export const failDogAreas = (error) => ({
    type: GET_DOG_AREAS_FAILURE,
    payload: error,
  })
  
  export const uploadDogAreasRequest = (form) => ({
    type: UPLOAD_DOG_AREAS_REQUEST,
    payload: form,
  })
  
  export const uploadDogAreasSuccess = (response) => ({
    type: UPLOAD_DOG_AREAS_SUCCESS,
    payload: {
      ...response,
    },
  })
  
  export const uploadDogAreasFailure = (error) => ({
    type: UPLOAD_DOG_AREAS_FAILURE,
    payload: error,
  })
  
  export const setSubmittableDogArea = (form) => ({
    type: SET_SUBMITTABLE_DOG_AREAS,
    payload: form,
  })
  
  export const getDogAreas = (payload) => ({
      type: GET_DOG_AREAS_SUCCESS,
      payload: payload,
  })
    
  
  
//   export const createEducationArea = (dogArea) => (dispatch) => {
//     dispatch(uploadDogAreasRequest(dogArea))
//     axios.post(`${serviceUrl}/api/1/education-areas`, dogArea)
//       .then((response) => {
//         dispatch(uploadEducationAreasSuccess(response.data, HTTP_POST))
//       })
//       .catch((error) => {
//         dispatch(uploadEducationAreasFailure(error))
//       })
//   }
  
//   export const updateDogArea = (dogArea, id) => (dispatch) => {
//     dispatch(uploadEducationAreasRequest(educationAreas))
//     axios.put(`${serviceUrl}/api/1/education-areas/${id}`, educationAreas)
//       .then((response) => {
//         dispatch(uploadEducationAreasSuccess({ data: response.data }, HTTP_PUT))
//       })
//       .catch((error) => {
//         dispatch(uploadEducationAreasFailure(error))
//       })
//   }
  
//   export const deleteDogArea = (dogArea) => (dispatch) => {
//     dispatch(uploadEducationAreasRequest(educationAreas))
  
//     axios.delete(`${serviceUrl}/api/1/education-areas/${educationAreas.id}`, educationAreas)
//       .then(() => {
//         dispatch(uploadEducationAreasSuccess({ data: educationAreas }, HTTP_DELETE))
//       })
//       .catch((error) => {
//         dispatch(uploadEducationAreasFailure(error))
//       })
//   }



