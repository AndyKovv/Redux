import { SET_YEAR, SET_DAY, NUMBER_PLUS } from '../constants/Page'

export function setYear(year){

	return {
		type: SET_YEAR, //Указываем константы чтобы перекинуть их в reducer
		payload: year   //Указываем данные для перекидки в reducer
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