import React, { useState } from "react";
import Card from "../src/Card";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../src/Profile";
import signGenerator from "./signGenerator";

import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("today");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [horoscope, setHoroscope] = useState({});

  signGenerator(+birthDay, birthMonth);

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
  }

  return (
    <div className="App">
      <p>Hello!</p>
      <Profile setBirthDay={setBirthDay} setBirthMonth={setBirthMonth} />
      {isAuthenticated && (
        <Card>
          <p>This is your horoscope</p>
          <p>{birthDay}</p>
          <p>{birthMonth}</p>
        </Card>
      )}
    </div>
  );
}

export default App;
