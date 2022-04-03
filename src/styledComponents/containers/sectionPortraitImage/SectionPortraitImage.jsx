import React from 'react';
import Section from './style';

const SectionPortraitImage = ({ url, alt, children }) => {

    return (
        <Section>              
            <Section.ImageContainer>
                <img
                    src={url} alt={alt}
                    width='400px' height='468px' 
                />
            </Section.ImageContainer>
            <Section.TextContainer>
                {children}
            </Section.TextContainer>
        </Section>
    )
}

export default SectionPortraitImage;
