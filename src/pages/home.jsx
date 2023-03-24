import React, { useState, useEffect } from 'react'
import Exemple from '../components/exemple'
import ForeCast from '../components/forecastContainer/forecastContainer'
import SelectComponent from '../components/select/SelectComponent'

const Home = () => {
	const [id, setId] = useState(1)
	return (
		<div>
			{/* <Exemple /> */}
			<h1>Weather Report</h1>
			<SelectComponent setId={setId} />
			{id && <ForeCast cityId={id} />}
		</div>
	)
}

export default Home
