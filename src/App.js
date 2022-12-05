import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import signGenerator from "./signGenerator";
import Button from "./Button";

import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [horoscope, setHoroscope] = useState({});
  const [cardClass, setCardClass] = useState("");

  useEffect(() => {
    let horoscopeSign = signGenerator(+birthDay, birthMonth);
    setSign(horoscopeSign);
  }, [birthDay, birthMonth]);

  function handleClick(e) {
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

      setCardClass(horoscope.colour); //this will set the class of the card to the color that matches the suggestion in the horoscope - to be used for styling accordingly
    }

    getHoroscope();
    console.log(horoscope);
  }

  // function handleDay(e) {
  //   setDay("tomorrow");
  //   handleClick();
  // }

  return (
    <div className="App">
      <header>Your Horoscope</header>
      <Profile setBirthDay={setBirthDay} setBirthMonth={setBirthMonth} />
      {isAuthenticated && (
        <>
          <Card className={cardClass}>
            <h1>{sign}</h1>
            <h2>{horoscope.day}</h2>
            <Button
              text="View tomorrow's horoscope"
              handleClick={() => {
                setDay("tomorrow");
                handleClick();
              }}
            />
            <p>{horoscope.description}</p>
            <p>
              Your mood is: <span>{horoscope.mood}</span>
            </p>
            <p>
              Your colour is: <span>{horoscope.colour}</span>
            </p>
            <p>
              Your lucky number is: <span>{horoscope.luckyNumber}</span>
            </p>
            <p>
              Your lucky time is: <span>{horoscope.luckyTime}</span>
            </p>
            <p>
              Your most compatible sign is:{" "}
              <span>{horoscope.compatibility}</span>
            </p>
          </Card>
          <Button
            text="Click to see today's horoscope!"
            handleClick={() => {
              setDay("today");
              handleClick();
            }}
            className="generate-horoscope"
          />
        </>
      )}
    </div>
  );
}

export default App;
