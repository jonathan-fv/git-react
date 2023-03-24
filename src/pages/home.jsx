import React, {useState} from 'react'
import Exemple from '../components/exemple'
import SelectComponent from "../components/SelectComponent";

const Home = () => {
	const [id, setId] = useState(1);
	return (
		<div>
			<Exemple />
			<SelectComponent setId={setId}/>
		</div>
	)
}

export default Home
