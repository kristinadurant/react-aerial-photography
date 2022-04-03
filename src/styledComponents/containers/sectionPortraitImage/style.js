import styled from "styled-components";

const Section = styled.section`
    display: flex;
    padding-top: 5%;
    margin-bottom: 5%;
    img {
        box-shadow: -20px 20px 0 0 #edebe6;
    }
    @media only screen and (max-width: 800px) {
        flex-direction: column-reverse;
        
    }
`;

Section.ImageContainer = styled.div`
    margin: 0 5%;  
    min-width: 300px;
    @media only screen and (max-width: 800px) {
        margin: 0 0 0 auto;
    } 
`;

Section.TextContainer = styled.div`
    margin-left: 5%;
    margin-bottom: 2rem;
    max-width: 600px;
    @media only screen and (max-width: 800px) {
        margin-left: 0;
    }
`;

export default Section;