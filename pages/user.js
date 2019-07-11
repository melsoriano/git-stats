import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GhPolyglot from "gh-polyglot";
import { Head, UserInfo, Charts } from "../components";

const User = props => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => setUserData(json))
      .catch(error => {
        console.error("Error:", error);
      });
  };

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
      }
      setLangData(stats);
    });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => response.json())
      .then(json => setRepoData(json))
      .catch(error => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getUserData();
    getLangData();
    getRepoData();
  }, []);

  return (
    <main>
      <Head
        title={`${username ? `GitHub Stats | ${username}` : "GitHub Stats"}`}
      />
      {userData && <UserInfo userData={userData} />}
      {langData && repoData && (
        <Charts langData={langData} repoData={repoData} />
      )}
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object
};

export default User;
