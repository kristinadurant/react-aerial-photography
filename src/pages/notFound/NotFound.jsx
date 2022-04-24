import React from 'react';
import { Link } from 'react-router-dom';
import appLocalization from '../../assets/localization';

const NotFound = () => {
  return (
    <div>
    <div>
      <h1>{appLocalization.notFoundPageTitle}</h1>
      <p dark> {appLocalization.notFoundPageText}</p>
      <Link to="/"><a>{appLocalization.notFoundPageButtonText}</a></Link>
    </div>
  </div>
  )
}

export default NotFound;