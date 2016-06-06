import {
	SET_DAY, NUMBER_PLUS,
	GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS
} from '../constants/Page'

export function beginPhoto(year){
	return{
		type: GET_PHOTOS_REQUEST, //Указываем константы чтобы перекинуть их в reducer
		payload: year   //Указываем данные для перекидки в reducer
	}
}

export function requestPhotos(year){
	

	return (dispatch) => {
			dispatch(beginPhoto(year))
			return setTimeout(() => {
				
				let args;
				args = year === 2014 ? [1,2,3,4,5] : [1,2,3]

				dispatch(receivePhotos(args))
			}, 1000)
	}
}

export function receivePhotos(args){
	return{
		type: GET_PHOTOS_SUCCESS,
		payload: args
	}
}

export function setDay(day){
	return{
		type: SET_DAY,
		payload: day
	}
}

export function plusNumber(first, second){
		let res = first * second
	return{
		type: NUMBER_PLUS,
		payload: res
	}
}