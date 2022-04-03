import styled from "styled-components";
import { Inner } from "../../../styledComponents/containers";

const Section = styled.section`
    padding: 8% 0;
    .text ul {
        padding-left: 2em;
    }
    .before-after .image {
        width: 700px;
        height: 400px;
      }
      .check-list li {
        margin-bottom: 1em;
      }
       .checkmark {
        width: 1.25em;
        height: 1.25em;
        margin-right: 1em;
        border-color: #77929257;
      }

      .font1 {
        margin-bottom: 0.5rem;
      }

      .font2 {
        margin-bottom: 5%;
      }
      @media only screen and (max-width: 800px) {
        .check-list {

          display: none;
          flex-wrap: wrap;
        } 
    }
`;

Section.Title = styled(Inner)`
      text-align: center;
`;

Section.Content = styled(Inner)`
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export default Section;