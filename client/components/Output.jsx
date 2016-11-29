import React from 'react';
import Domain from './Domain';
import Histogram from './Histogram';

class Output extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <table className="table-style">
          <tbody>
            <tr>
              <th>Domain</th>
              <th>List of Urls</th>
            </tr>
            {this.props.output.map((link) => (
              <Domain link={link}
                getDomains={this.props.getDomains}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Output;
