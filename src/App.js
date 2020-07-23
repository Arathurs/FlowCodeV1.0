import React from 'react';
import './App.css';
import { createFiftyRandomColors } from './assets/helperfunctions';
import { Color } from './components/Color';

class App extends React.Component {
    constructor(props) {
		super(props);
			
		this.state = {
			colors: [],
			initialized: false,
			selectedColor: null
		};
		
		this.changeColor = this.changeColor.bind(this);
		this.startOver = this.startOver.bind(this);
	}
	
	componentDidMount() {
		
		if(!this.state.intialized) {
					
			let colors = createFiftyRandomColors();
			this.setState({
				colors: colors,
				initialized: true
			});
					
		}
	}
		
	changeColor(newColor) {
		

		this.setState({
			selectedColor: newColor
		});
		
		
	}
	
	startOver() {
		
		let colors = createFiftyRandomColors();
		this.setState({
			colors: colors,
			initialized: true,
			selectedColor: null
		});
	}
	
	
	
	render() {
       

        return (
            <div className="container">
				<h1>Color Selector</h1>
				<div className='reset' >
					<button onClick={this.startOver}>Reset</button>
				</div>
				{this.state.colors.map((color, i) => <Color key={'color_'+i} color={color} selected={this.state.selectedColor} onClick={this.changeColor}/>)}
            </div>
		);
    }
}

export default App;
