import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class App extends Component{
	render(){
		const {user} = this.props.user
		const {photos, year} = this.props.page
		
		return(
			<div>
			<h2>I am from App {user}</h2>
			<h2> There are {photos.length} on {year} </h2>
			</div>
		)
	}
}
	function mapStateToProps (state){
		return{
			user: state.user,
			page: state.page
			
		}
	}

export default connect(mapStateToProps)(App)