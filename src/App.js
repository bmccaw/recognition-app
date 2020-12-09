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
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function fetchUsers() {
      const TOKEN =
        "YjQ4a2syZzc5bGFjNDUxa3RjdGRrc3ZvNzoxOTc0NnNsN3A2cmtyYWp1MWpxcGczZm1haXFpNGkxaHNoaDkzZmFrdWp0aW5ybHZhYWVy";
      const response = await fetch(
        "https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/",
        {
          method: "GET",
          mode: "no-cors",
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      console.log(response);
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
