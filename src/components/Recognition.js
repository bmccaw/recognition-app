import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import gratitude from "../assets/gratitude.jpg";
import cheersforpeers from "../assets/cheersforpeers.jpg";
import gamechanger from "../assets/gamechanger.jpg";
import raisetheroof from "../assets/raisetheroof.jpg";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const StyledInputContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / 5;
`;

const StyledRadioContainer = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 3;
`;

const StyledImage = styled.img`
  width: 70px;
  height: auto;
`;

const Recognition = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    const { userId } = data;

    const level = parseInt(data.level, 10);
    const baseUrl = "https://bmccaw.github.io/recognition-app/";
    let imageUrl;
    switch (level) {
      case 5:
        imageUrl = `${baseUrl}gratitude.jpg`;
        break;
      case 10:
        imageUrl = `${baseUrl}cheersforpeers.jpg`;
        break;
      case 20:
        imageUrl = `${baseUrl}gamechanger.jpg`;
        break;
      case 25:
        imageUrl = `${baseUrl}raisetheroof.jpg`;
        break;
      default:
        console.log("Unknown level ", level);
    }

    fetch(
      `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/${userId}/recognize`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: data.text,
          imageUrl: imageUrl,
          level: level,
        }),
      }
    )
      .then(function (response) {
        console.log(response);
        console.log("response.status: ", response.status);
        console.log("response.ok: ", response.ok);
        if (response.ok) {
          alert("Recognition sent!");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("data:", data);
        if (data && data.message) {
          alert(data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error sending recognition!");
      });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/`,
          {
            method: `GET`,
          }
        );

        const body = await result.json();
        console.log(body);
        setUserData(body);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    fetchUsers();
  }, []);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <h2>Add Recognition</h2>
        <p>Who would you like to recognize?</p>
        <select
          name="userId"
          id="userId"
          ref={register({ required: "This input is required." })}
        >
          {userData.map((user) => {
            return (
              <option name="user" key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <p>Tell us why you think they are a rockstar...</p>
        <textarea
          name="text"
          placeholder="Add a message..."
          ref={register({ required: "This input is required." })}
        />
      </StyledInputContainer>
      <StyledRadioContainer>
        <p>Select your gift level...</p>
        <input
          type="radio"
          id="Starbucks"
          name="level"
          value="5"
          ref={register({ required: true })}
        />
        <StyledImage src={gratitude} />
        <label for="5">Gratitude: $5 Starbucks Gift Card</label>
        <p />
        <input
          type="radio"
          id="Starbucks"
          name="level"
          value="10"
          ref={register({ required: true })}
        />
        <StyledImage src={cheersforpeers} />
        <label for="10">Cheers for Peers: $10 Starbucks Gift Card</label>
        <p />
        <input
          type="radio"
          id="Amazon"
          name="level"
          value="20"
          ref={register({ required: true })}
        />
        <StyledImage src={gamechanger} />
        <label for="20">Game Changer: $20 Amazon Gift Card</label>
        <p />
        <input
          type="radio"
          id="Amazon"
          name="level"
          value="25"
          ref={register({ required: true })}
        />
        <StyledImage src={raisetheroof} />
        <label for="25">Raise the Roof: $25 Amazon Gift Card</label>
        <p />
        <input type="submit" />
      </StyledRadioContainer>
    </StyledForm>
  );
};

export default Recognition;
