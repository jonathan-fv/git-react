import React, {useState} from 'react'
import Exemple from '../components/exemple'
import ForeCast from '../components/forecastContainer/forecastContainer'
import SelectComponent from "../components/SelectComponent";

const Home = () => {
	const [id, setId] = useState(1);
	return (
		<div>
			<Exemple />
			<ForeCast />
			<SelectComponent setId={setId}/>
		</div>
	)
}

export default Home
