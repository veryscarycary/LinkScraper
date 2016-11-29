import React from 'react';

class Domain extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownLinks: []
    };
  }

  render() {
    return (
      <tr>
        <td>{link}</td>
        <td>
          <select>
            {this.state.dropDownLinks.map((link) => (
              <option>{link}</option>
            ))}
          </select>
        </td>
      </tr>
    );
  }
};

export default Domain;
