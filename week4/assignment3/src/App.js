import React from 'react';
// import React,{ Component } from 'react';
import './App.css';
// import {connect} from 'react-redux'




class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true,
        dispaly: 'block'
      };
      this.handleClick = this.handleClick.bind(this);

      this.toggleClass= this.toggleClass.bind(this);     //for menu bar
      this.state = {
        activeIndex: 0
      }

    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        display: prevState.isToggleOn ? 'none': 'block'
      }));
    }
  
    toggleClass(index, e) {         //for menu bar
      this.setState({ activeIndex: index });
  };
    


  render () {
    return (

      <div className="App">
          <header>
           <nav>
              <span className="logo">Website Title / Logo</span>
              <div className="item">
              <span className="item1">Item 1</span>
              <span className="item2">Item 2</span>
              <span className="item3">Item 3</span>
              <span className="item4">Item 4</span>
              </div>
              

              <div className ="mobile">
              <span id ="menubar" >
                  <i className="fas fa-bars" className="fas fa-times"></i>

              </span> 
              </div>
            </nav> 
            
            <ul id ="menulist" >
            {this.renderSidebarMenuItems}
                    <li className={this.state.activeIndex ? 'active': null}  onClick={this.toggleClass}>MOB Item 1</li>
                    <li className={this.state.activeIndex ? 'active': null}  onClick={this.toggleClass}>MOB Item 2</li>
                    <li className={this.state.activeIndex ? 'active': null}  onClick={this.toggleClass}>MOB Item 3</li>
                    <li className={this.state.activeIndex ? 'active': null}  onClick={this.toggleClass}>MOB Item 4</li>
                </ul>
                
          </header>


        <main className="App-main">

          <section className="welcome_message">
              <h1 id = "h1text"  onClick={this.props.handleClick}>Welcome Message</h1>
          </section>
        
          <section class="content_box">
            <div class="sectiontitle">
            <h3>Section Title</h3>
            </div>
            <div class="box1">
            <div class="contentbox">Content Box 1</div>
            <div class="contentbox">Content Box 2</div>
            <div class="contentbox">Content Box 3</div>
            <div class="contentbox">Content Box 4</div>
              
            </div>
          </section>
            
          <button id ="toggleList" onClick={this.handleClick}> {this.state.isToggleOn ? 'Call to Action' : 'Call to Action'} </button>
            
          <section class ="content_box">
            <div id = "togglebox"  style={{display: this.state.display}}>
            <div class="box2">
            <div class="contentbox">Content Box 1</div>
            <div class="contentbox">Content Box 2</div>
            <div class="contentbox">Content Box 3</div>
            <div class="contentbox">Content Box 4</div>
            </div>
            </div>
          </section>
            
            
        </main>
      </div>
    );
  }
}


export default App;


