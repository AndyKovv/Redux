import React, {PropTypes, Components} from 'react'

export default class Page extends Components{
	render (){
		const {year, photos} = this.props
		return(
			<div>
			<p> You have {photos.length} on {year}</p>
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired
}