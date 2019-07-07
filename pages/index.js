import React, { useState } from "react";
import Router from "next/router";
import Head from "../components/Head";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100vh;
  form {
    border-radius: 5px;
    text-align: center;
    input {
      font-size: 60px;
      font-weight: 700;
      text-align: center;
      outline: 0;
      border: 0;
      border-bottom: 1px solid #000;
      width: 100%;
      margin-top: 2rem;
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
          <label htmlFor="username">GitHub Username</label>
          <input name="username" type="text" onChange={handleChange} />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
