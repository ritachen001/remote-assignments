import React from 'react';


class Toggle extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
            isToggleOn: true,
            dispaly: 'block'
          };
 
          // 这个绑定是必要的，使`this`在回调中起作用
          this.handleClick = this.handleClick.bind(this);
        }
 
        handleClick() {
          this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'none': 'block'
          }));
        }


    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <div className="toggleBox" style={{display: this.state.display}}></div>
        </div>
      );
    }
  }




  


  export default Toggle;
