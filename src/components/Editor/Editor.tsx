import styled from "styled-components";
import React from "react";

const EditorContainer = styled.div`
  width: 40vw;
  height: 70vh;
  background-color: whitesmoke;
  border: 1px solid black;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`;

//ta emot setText och typa upp det

export const Editor = (props) => {
  const handleChange = (newText: string) => {
    props.setText(newText);
    console.log(newText);
  };

  return (
    <EditorContainer>
      <TextArea onChange={(e) => handleChange(e.target.value)} />
    </EditorContainer>
  );
};
