import React from 'react';
import Domain from './Domain';

const Output = ({output, getDomains}) => (
  <table>
    {output.map((link) => (
      <Domain link={link} getDomains={getDomains} />
    ))}
  </table>
);

export default Output;
