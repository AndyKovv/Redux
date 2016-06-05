import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props //Загоняем данные в компонент
    const { setYear, setDay, plusNumber} = this.props.pageActions //Прокидываем dispatch к action
	return <div>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} day={page.day} res={page.res} setYear={setYear} setDay={setDay} plusNumber={plusNumber} />
    </div>
  }
}

function mapStateToProps(state) { //Метод изменяющий state
  return {
    user: state.user, //Парсим данные принятые из reducer
    page: state.page
  }
}

function mapDispatchToProps(dispatch) { //Метод отправляющий данные в ActionCreators функции. Тоесть отправляем дейсвие dispatch action
  return { 
    pageActions: bindActionCreators(pageActions, dispatch)
   

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)