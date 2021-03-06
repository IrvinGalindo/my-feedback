import { Rating, TextField } from "@mui/material";
import React from "react";
import "./InputType.css";

const InputType = ({ type, nextQuestion, index, setText, text }) => {
  switch (type) {
    case "star":
      return (
        <Rating
          name={`Rating question ${index}`}
          className="questions-rating"
          value={null}
          onChange={(_, newValue) => {
            nextQuestion(newValue);
          }}
        />
      );
    case "textField":
      return (
        <>
          <TextField
            id={`opened question ${index}`}
            multiline
            rows={3}
            className="questions-opened"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default InputType;
