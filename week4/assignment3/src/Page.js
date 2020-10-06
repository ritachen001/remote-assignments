import React from 'react';
// import ReactDOM from 'react-dom';

// import ToggleBox from 'toggleBox';



// Request 3: Click to Show More Content Boxes.

function ToggleBoxBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (showtoggleBox);

}
  
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showtoggleBox: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showtoggleBox: !state.showtoggleBox
      }));
    }
  
    render() {
      return (
        <div>
          <ToggleBoxBanner warn={this.state.showtoggleBox} />
          <button onClick={this.handleToggleClick}>
            {this.state.showtoggleBox ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }

  export default Page;
