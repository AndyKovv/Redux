import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, NUMBER_PLUS } from '../constants/Page'
const initialState = {
  year: 2016,
  photos: [],
  day: 'Monday',
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
	case GET_PHOTOS_REQUEST: //Принемаем на ход константу прокинутую action
		return { ...state, year: action.payload, fetching: true } //Создаём новый state и прокидываем его в контейнер

	case GET_PHOTOS_SUCCESS:
		return {...state, photos: action.payload, fetching:false }

	case NUMBER_PLUS:
		return {...state, res: action.payload}

	default:
		return state;
  }

}