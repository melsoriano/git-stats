import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Head } from "../components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100vh;
  margin-top: 100px;
  form {
    border-radius: 5px;
    text-align: center;
    input {
      font-family: "DM Sans";
      font-size: 30px;
      font-weight: 700;
      text-align: center;
      outline: 0;
      border: 0;
      border-bottom: 1px solid #000;
      width: 100%;
      margin-top: 2rem;
    }
    label {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setUsername(value);
  };

  return (
    <main>
      <Head title="Github Profile Stats" />

      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: "/user",
              query: { id: username }
            });
          }}
        >
          <label htmlFor="username">Enter Your GitHub Username</label>
          <input name="username" type="text" onChange={handleChange} />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
