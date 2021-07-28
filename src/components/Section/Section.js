import React from 'react';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      <h2 className="SectionTitle">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
