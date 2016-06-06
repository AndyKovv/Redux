import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'


export default class Page extends Component {
  onYearBtnClick(e) {
	this.props.requestPhotos(+e.target.innerText) //Для изменения данных необходимо вызвать callback из props.
											//Прокидываем значение в контейнер
  }
  onDayBtnClick(e){
	let text = e.target.textContent
	this.props.setDay(text)
  }
  plusButton(e){
	e.preventDefault();
	let first = ReactDOM.findDOMNode(this.refs.first).value,
		second = ReactDOM.findDOMNode(this.refs.second).value;
		this.props.plusNumber(first, second);
  }
  render() {
	const { year, photos, day, res } = this.props
	return <div>
	<p>
		<button onClick={::this.onYearBtnClick}>2016</button>
		<button onClick={::this.onYearBtnClick}>2015</button>
		<button onClick={::this.onYearBtnClick}>2014</button>
	</p>
		<h3>{year} год</h3>  {/* Отображаем данные из контейнера*/}
	<p>У тебя {photos.length} фото.</p>
	<p>
		<button onClick={::this.onDayBtnClick}>Monday</button>
		<button onClick={::this.onDayBtnClick}>Thusday</button>
		<button onClick={::this.onDayBtnClick}>Wednesday</button>
	</p>
	<p>Day{day}</p><br/>
	<p>
		<input type='text' ref='first' /> + <input type='text' ref='second' />
		<button onClick={::this.plusButton}>+</button>
	</p> 
	<h3>{res}</h3>
	</div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  setDay: PropTypes.func.isRequired,
  requestPhotos: PropTypes.func.isRequired
}