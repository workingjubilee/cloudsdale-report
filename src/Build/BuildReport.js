import React from 'react';
import PropTypes from 'prop-types';

export default function Report (props) {
  return (
    <li>
      {props.report}
    </li>
  )
}

Report.propTypes = {
  report: PropTypes.string
}