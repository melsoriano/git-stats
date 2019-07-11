import styled from "styled-components";
import media from "./media";

const Section = styled.section`
  padding: 1rem 3rem;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};
`;

export default Section;
