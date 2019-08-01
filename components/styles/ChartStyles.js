import styled from 'styled-components';
import { theme, media } from '../../styles';
const { colors } = theme;

const ChartStyles = styled.div`
  margin-top: -6rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
  justify-content: center;
  ${media.bp900`
    justify-items: center;
  `};

  .chart {
    background-color: ${colors.white};
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: ${theme.boxShadow};
    ${media.bp600`
      padding: 2rem 1rem;
    `};

    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    p {
      color: ${colors.darkerGrey};
    }
  }
`;

export default ChartStyles;
