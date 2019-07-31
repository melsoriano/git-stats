import styled from 'styled-components';
import { theme, mixins, media } from '../../styles';
const { colors } = theme;

const UserInfoStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 5rem 1rem;
  text-align: center;
  background: ${colors.black};
  color: ${colors.offWhite};

  .avatar {
    ${mixins.flexCenter};
    margin-bottom: 1.5rem;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
  }
  h2 {
    font-family: 'Fira Code';
    font-size: 1.5rem;
  }

  .info {
    ${mixins.flexCenter};
    ${media.bp600`
      display: block;
    `};

    &__item {
      ${mixins.flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;

      svg {
        margin-right: 10px;
      }
    }
  }

  .bio {
    width: 50%;
    margin-bottom: 2rem;
    ${media.bp600`
      width: 100%;
      font-size: 14px;
    `};
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    &__item {
      ${mixins.flexCenter};
      flex-direction: column;
      background-color: ${colors.darkGreyBlack};
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;
      ${media.bp400`
        padding: 1rem 0.5rem;
      `};

      .num {
        color: ${colors.offWhite};
        font-size: 1.5rem;
        ${media.bp400`
          font-size: 1rem;
        `};
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
        ${media.bp400`
          font-size: 0.5rem;
        `};
      }
    }
  }
`;

export default UserInfoStyles;
