/*eslint-disable*/
export const ping = store => next => action => {
	console.log(`Тип события: ${action.type}, данные события ${action.payload}`);
	return next(action)
}
/*eslint-enable*/
//ping это функция которая возвращает функцию
//Middleware это функция которая обычно возвращает функцию,
//если только целью middleware не являеться перервать цепочку вызовов
// В возвращаемых функциях благодаря applyMiddleware у нас становяться доступными аргументы,
//Которые мы можем использовать во благо приложения
