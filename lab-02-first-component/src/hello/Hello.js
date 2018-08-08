import React, { PureComponent } from 'react'

export default class Hello extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Howdy!!',
    };
  }

  static defaultProps = {
    friend: 'Partner!!',
  }
  
  render() {
    return (
      <div className="hello">
        <h1>{this.state.greeting}</h1>
        <h2>{this.props.friend}</h2>
        <p>Congratulations!  You have created your first React component!</p>
      </div>
    );
  }
}
