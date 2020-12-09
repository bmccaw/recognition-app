import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";

import gratitude from "./assets/gratitude.jpg";
import gamechanger from "./assets/gamechanger.jpg";
import cheersforpeers from "./assets/cheersforpeers.jpg";
import raisetheroof from "./assets/raisetheroof.jpg";

const StyledWrapper = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

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

const StyledValidation = styled.p`
  color: #bf1650;
  ::before {
    display: inline;
    content: "⚠ ";
  }
`;

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

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

    // TODO URL should be based on user (currently hard coded)
    fetch(
      "https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/15/recognize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
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
        // TODO: response.ok is always false
        // if (response.ok) {
        //   alert('Recognition sent!')
        // } else {
        //   alert('Response not OK!')
        // }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error sending recognition!");
      });
  };

  useEffect(() => {
    async function fetchUsers() {
      await fetch(
        "https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    fetchUsers();
  }, []);

  return (
    <StyledWrapper>
      <StyledHeader>Workgrid Rockstar!</StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputContainer>
          <p>Who would you like to recognize?</p>
          <input
            type="text"
            placeholder="Recipient Email"
            name="RecipientEmail"
            ref={register({
              required: "This input is required.",
              pattern: /^\S+@\S+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="RecipientEmail"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <StyledValidation key={type}>{message}</StyledValidation>
                  ))
                : null;
            }}
          />
          <p>Tell us why you think they are a rockstar...</p>
          <textarea
            name="text"
            placeholder="Add a message..."
            ref={register({ required: "This input is required." })}
          />
          <ErrorMessage
            errors={errors}
            name="text"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <StyledValidation key={type}>{message}</StyledValidation>
                  ))
                : null;
            }}
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
    </StyledWrapper>
  );
}
