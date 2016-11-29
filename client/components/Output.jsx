import React from 'react';
import Domain from './Domain';

const Output = ({output}) => (
  <table>
    {output.map((link) => (
      <Domain link={link} />
    ))}
  </table>
);

export default Output;
