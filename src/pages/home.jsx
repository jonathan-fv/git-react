import React, {useState} from 'react'
import Exemple from '../components/exemple'
import ForeCast from '../components/forecastContainer/forecastContainer'
import SelectComponent from "../components/SelectComponent";

const Home = () => {
	const [id, setId] = useState(1);
	return (
		<div>
			<Exemple />
			<SelectComponent setId={setId}/>
			<ForeCast cityId={id}/>
		</div>
	)
}

export default Home
