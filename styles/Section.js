import styled from 'styled-components';
import { media } from '../styles';

const Section = styled.section`
  padding: 3rem;
  ${media.bp600`
      padding: 3rem 1rem;
    `};

  & > div {
    max-width: 1200px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      padding-bottom: 6px;
      ${media.bp600`
        font-size: 1.5rem;
      `};
    }
  }
`;

export default Section;
