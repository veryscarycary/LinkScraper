import React from 'react';

class Domain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.link,
      output: '../client/assets/loadingIcon.gif'
    };
  }

  componentWillMount() {
    this.props.getDomains(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.link}</td>
        <td>
          {!Array.isArray(this.state.output) ? <img className='loading' src={this.state.output} /> :
            (<select>
              {this.state.output.map((link) => (
                <option>{link}</option>
              ))}
            </select>)
          }
        </td>
      </tr>
    );
  }
};

export default Domain;
