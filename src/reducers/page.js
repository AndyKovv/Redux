import {SET_YEAR, SET_DAY, NUMBER_PLUS} from '../constants/Page'
const initialState = {
  year: 2016,
  photos: [],
  day: 'Monday',
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
	case SET_YEAR: //Принемаем на ход константу прокинутую action
		return { ...state, year: action.payload } //Создаём новый state и прокидываем его в контейнер

	case SET_DAY:
		return {...state, day: action.payload }

	case NUMBER_PLUS:
		return {...state, res: action.payload}

	default:
		return state;
  }

}