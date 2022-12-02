import React, { useEffect, useState } from "react";
import Card from "../src/Card";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../src/Profile";
import signGenerator from "./signGenerator";
import Button from "./Button";

import "./App.css";

function App() {
	const { isAuthenticated } = useAuth0();
	const [sign, setSign] = useState("");
	const [day, setDay] = useState("today");
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [horoscope, setHoroscope] = useState({});

	useEffect(() => {
		let horoscopeSign = signGenerator(+birthDay, birthMonth);
		setSign(horoscopeSign);
	}, [birthDay, birthMonth]);

	function handleClick(e) {
		console.log(`You have clicked me!`);
		async function getHoroscope() {
			const rawResponse = await fetch(
				`https://aztro.sameerkumar.website?sign=${sign}&day=${day}`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				}
			);
			const content = await rawResponse.json();
			//console.log(content);

			setHoroscope({
				dateRange: content.date_range,
				day: content.current_date,
				description: content.description,
				compatibility: content.compatibility,
				mood: content.mood,
				colour: content.color,
				luckyNumber: content.lucky_number,
				luckyTime: content.lucky_time,
			});
		}
		getHoroscope();
		console.log(horoscope);
	}

	return (
		<div className='App'>
			<p>Hello!</p>
			<Profile setBirthDay={setBirthDay} setBirthMonth={setBirthMonth} />
			{isAuthenticated && (
				<>
					<Card>
						<p>This is your horoscope</p>
						<p>{birthDay}</p>
						<p>{birthMonth}</p>
					</Card>
					<Button
						text='Click to see your horoscope!'
						handleClick={handleClick}
						className='generate-horoscope'
					/>
				</>
			)}
		</div>
	);
}

export default App;
