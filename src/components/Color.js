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
        const type = typeof this.props.color;
		console.log('rendering',type,this.props.color,this.props.selected,(this.props.color === this.props.selected));
		const className = this.props.color === this.props.selected ? 'select' : '',
		  completedClassName = `color ${className}`; 
		
		
		return <div className={completedClassName} style={{backgroundColor: this.props.color}} onClick={this.handleClick}></div>;
    }
}