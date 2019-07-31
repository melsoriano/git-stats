import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Head,
  UserInfo,
  Charts,
  Repos,
  Corner,
  Error,
  RateLimit
} from '../components';
import GhPolyglot from 'gh-polyglot';

const User = props => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const [rateLimit, setRateLimit] = useState(null);

  const getUserData = useCallback(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then(json => setUserData(json))
      .catch(error => {
        setError({ active: true, type: 400 });
        console.error('Error:', error);
      });
  }, [username]);

  const getLangData = useCallback(() => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
        setError({ active: true, type: 400 });
      }
      setLangData(stats);
    });
  }, [username]);

  const getRepoData = useCallback(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then(json => {
        setRepoData(json);
      })
      .catch(() => {
        setError({ active: true, type: 200 });
      });
  }, [username]);

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then(response => response.json())
      .then(json => {
        setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          setError({ active: true, type: 403 });
        }
      });

    getUserData();
    getLangData();
    getRepoData();
  }, [getLangData, getRepoData, getUserData]);

  return (
    <main>
      {rateLimit && <RateLimit rateLimit={rateLimit} />}

      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          <Head
            title={`${username ? `Git Stats | ${username}` : 'Git Stats'}`}
          />

          <Corner />

          {userData && <UserInfo userData={userData} />}

          {langData && repoData && (
            <Charts langData={langData} repoData={repoData} />
          )}

          {repoData && <Repos repoData={repoData} />}
        </>
      )}
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object
};

export default User;
