import styled from "styled-components";

const Footer = styled.footer`
    background-color: #edebe6;
    color: #062b2d;
    padding: 6% 0 4%;
    font-size: 0.75em;
    margin-top: 100px;



`;

Footer.Top = styled.div`
    border-bottom: 1px solid #062b2d;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

Footer.Social = styled.div`
    a {
        font-size: 1.5em;
        margin-left: 0.5em;
    }
`;

Footer.Main = styled.div`
    padding: 3% 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    li,
    h3 {
      margin: 0.5em 0;
    }
    li,
    h3 + p {
      font-weight: 200;
    }
    input {
      width: 100%;
      background-color: transparent;
      border: 1px solid #062b2d !important;
      padding: 0.5em;
      margin-bottom: 1em;
    }
    button {
      width: 100%;
    }
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
`;

Footer.Bottom = styled.div`
    border-top: 1px solid #062b2d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    i {
        margin-left: 1em;
      }
`;

Footer.TestimonialFormContainer = styled.div`
  @media only screen and (max-width: 1024px) {
    > div {
      margin: 50px auto 0;
    }
  }
`;

export default Footer;