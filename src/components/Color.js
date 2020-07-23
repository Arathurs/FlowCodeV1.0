import React from 'react';

export class Color extends React.Component {
  	constructor(props) {
		super(props);
		
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		

		this.props.onClick(this.props.color);
		
		
	}
	
	render() {
        
		return <div className={this.props.color === this.props.selected ? 'color select' : 'color'} style={{backgroundColor: this.props.color}} onClick={this.handleClick}></div>;
    }
}