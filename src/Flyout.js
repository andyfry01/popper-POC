import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Manager, Reference, Popper } from 'react-popper';
import { CSSTransition } from 'react-transition-group'

const animationClassNames = {
 appear: 'fade',
 appearActive: '',
 enter: 'fade',
 enterActive: 'fade in',
 enterDone: 'fade in show',
 exit: 'fade out',
 exitActive: 'fade out',
 exitDone: 'fade',
}

class Flyout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      key: Date.now()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.content !== this.props.content) {
      this.setState({key: Date.now()})
    }
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <span ref={ref}>
              <span 
                onClick={() => this.setState({show: !this.state.show})}>
                fights
              </span>
            </span>
          )}
        </Reference>
        <CSSTransition classNames={animationClassNames} in={this.state.show} timeout={100}>
          <span className='fade'>
            <Popper 
              key={this.state.key} 
              placement={this.props.placement}
              modifiers={{ hide: {enabled: false}, preventOverflow: { enabled: false }, flip: {enabled: false} }}  
            >
              {({ ref, style, placement, arrowProps, scheduleUpdate }) => {
                scheduleUpdate()
                return (
                  <div 
                  className="popover bs-popover-right" 
                  role="tooltip" 
                  id="popover448231" 
                  x-placement="right"
                  ref={ref} style={{maxWidth: 'unset', ...style }}
                  >
                  <div ref={arrowProps.ref} style={arrowProps.style} className={`arrow ${placement}`} />
                  <div className="popover-body">
                    <img src={this.props.content} alt=""/>
                  </div>
                </div>
                )
              }}
            </Popper>
          </span>
        </CSSTransition>
      </Manager>
    );
  }
}

export default Flyout;
              // <div ref={ref} style={style} data-placement={placement} classname="fade in popover top show bs-popover-right">
              //    <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
                 
              //  </div> 