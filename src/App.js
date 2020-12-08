import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components'

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
    <h1>Workgrid Rockstar!</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <p>Who would you like to recognize?</p>
    <input type="text" placeholder="Recipient Email" name="RecipientEmail" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
    {errors.recipientEmailRequired && <span>This field is required</span>}
    <ErrorMessage
      errors={errors}
      name="RecipientEmail"
      render={({ messages }) => {
        console.log("messages", messages);
        return messages
          ? Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
          : null;
      }}
    />
    <p>Tell us why you think they are a rockstar...</p>
    <textarea name="Summary" placeholder="Add a message..." ref={register({ required: true })}/>
    {errors.summaryRequired && <span>This field is required</span>}
    <p>Select your gift level...</p>
    <input type="radio" id="Starbucks" name="Gift" value="Starbucks5" ref={register({ required: true })}/>
    <label for="Starbucks5">Gratitude: $5 Starbucks Gift Card</label>
    <input type="radio" id="Starbucks" name="Gift" value="Starbucks10" ref={register({ required: true })}/>
    <label htmlFor="Starbucks10">Cheers for Peers: $10 Starbucks Gift Card</label>
    <input type="radio" id="Amazon" name="Gift" value="Amazon20" ref={register({ required: true })}/>
    <label for="Amazon20">Game Changer: $20 Amazon Gift Card</label>
    <input type="radio" id="Amazon" name="Gift" value="Amazon25" ref={register({ required: true })}/>
    <label htmlFor="Amazon25">Raise the Roof: $25 Amazon Gift Card</label>

    <p/>
    <input type="submit" />
  </form>
    </>
);
}
