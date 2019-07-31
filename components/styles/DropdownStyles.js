import styled, { css } from 'styled-components';
import { theme, mixins } from '../../styles';
const { colors } = theme;

const DropdownStyles = styled.div`
  position: relative;
  width: 100px;
  font-size: 14px;
  font-weight: 500;

  .dropdown__button {
    ${mixins.flexBetween};
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: ${colors.darkGreyBlack};
    background-color: transparent;
    border: 1px solid ${colors.darkGreyBlack};
    padding: 10px 7px;
    border-radius: 5px;

    &:hover,
    &:focus {
      color: ${colors.orange};
      background: ${colors.offWhite};
      border-color: ${colors.orange};
    }
    svg {
      margin-left: 0.5rem;
    }
    label {
      cursor: pointer;
    }
  }
  .dropdown__list {
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transition: ${theme.transition};
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    background-color: ${colors.offWhite};
  }
  .dropdown__list-item {
    border-radius: 0;
    transition: ${theme.transition};
    &:hover,
    &:focus {
      background-color: ${colors.orange};
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
      color: ${colors.orange};
      background: none;
      padding: 10px 7px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      text-align: left;
      &:hover,
      &:focus {
        color: ${colors.offWhite};
      }
    }
  }
  ${props =>
    props.active &&
    css`
      .dropdown__list {
        opacity: 1;
        visibility: visible;
      }
      .dropdown__button {
        background: ${colors.offWhite};
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;

export default DropdownStyles;
