import '../style.css';
import React from 'react';
import {  BeforeAfter, CheckList } from '../../../components';
import { before, after, photoEditing } from '../Content';
import Section from './style.js';
import appLocalization from '../../../assets/localization';

const PhotoEditing = () => {
  return (
    <Section>
        <Section.Title>
          <h2 className='two-lines'> 
            <span className='font1'>{appLocalization.photoEditingTitleLarge}</span>
            <span className='font2'>{appLocalization.photoEditingTitle}</span>
          </h2>
        </Section.Title>

        <Section.Content>
            <div className='text'>
                <CheckList list={photoEditing} />
            </div>

            <BeforeAfter before={before} after={after} />

        </Section.Content>
    </Section>
  )
}

export default PhotoEditing