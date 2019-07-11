import styled from "styled-components";

const UserInfoStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 28px;
  }

  .avatar {
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  .info {
    &__item {
      margin: 0 1rem 0.5rem;
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;

    &__item {
      flex-direction: column;
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;

      .num {
        font-size: 1.5rem;
      }

      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        margin-top: 0.75rem;
      }
    }
  }
`;

export default UserInfoStyles;
