import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import user from "../data/user";

const StyledContainer = styled.main`
  img {
    max-width: 200px;
  }
`;

class User extends Component {
  state = {
    username: "",
    user: {}
  };

  componentDidMount() {
    this.setState({ username: this.props.query.id });
    const username = this.props.query.id;

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ user: json });
      });
    this.setState({ user });
  }

  render() {
    const { username, user } = this.state;

    return (
      <StyledContainer>
        <h1>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {username}
          </a>
        </h1>
        <h2>{user.name}</h2>
        <h3>{user.company}</h3>
        <p>{user.blog}</p>
        <p>{user.location}</p>
        <p>{user.email}</p>
        <p>{user.hireable ? "Hireable" : "Not Available"}</p>
        <p>{user.bio}</p>
        <p>Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>
          Member since &nbsp;
          {new Date(user.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
          })}
        </p>
        <img src={user.avatar_url} alt="" />
      </StyledContainer>
    );
  }
}

User.propTypes = {
  query: PropTypes.object
};

export default User;
