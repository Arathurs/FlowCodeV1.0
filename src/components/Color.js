import React from 'react';
import { ColorErrorBoundary } from './errors/ColorErrorBoundary';

export class Color extends React.Component {
  	constructor(props) {
		super(props);
		
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		

		this.props.onClick(this.props.color);
		
		
	}
	
	render() {
        
		return (
			
			<ColorErrorBoundary>
				
				<div className={this.props.color === this.props.selected ? 'color select' : 'color'} style={{backgroundColor: this.props.color}} onClick={this.handleClick}></div>
			
			</ColorErrorBoundary>
		);
    }
}