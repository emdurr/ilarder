import React, { Component } from 'react';
import { Link } from 'react-router';
import SignUp from './SignUp';
import foodImg from '../images/food.jpg';

const styles = {
	filler: { height: '350px' },
	txt: { color: 'black' },
	foodImg: { marginTop: '40px', width: '100%', height: '100%' }
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.SignUp = this.SignUp.bind(this);
	}

	SignUp() {
		this.props.history.push('/users/sign_up');
	}

	render() {
		return(
			<div>
		 		<div className='center container'>
		 			<div className='row'>
		 				<img src={foodImg} style={ styles.foodImg } />
		 				<div className='col s5'>
			 				<p>Proin eget tortor risus. Nulla porttitor accumsan tincidunt. 
				 				Curabitur arcu erat, accumsan id imperdiet et, 
				 				porttitor at sem. Curabitur non nulla sit 
				 				amet nisl tempus convallis quis ac lectus. 
				 				Vestibulum ante ipsum primis in faucibus 
				 				orci luctus et ultrices posuere cubilia Curae; 
				 				Donec velit neque, auctor sit amet aliquam vel, 
				 				ullamcorper sit amet ligula. Cras ultricies ligula 
				 				sed magna dictum porta. Sed porttitor lectus 
				 				nibh. Vivamus magna justo, lacinia eget 
				 				consectetur sed, convallis at tellus. Quisque 
				 				velit nisi, pretium ut lacinia in, elementum id enim. 
				 				Curabitur aliquet quam id dui posuere blandit.
				 			</p>
				 		</div>
				 		<div className='col s6' style={ styles.filler }>
				 			<p> </p>
				 		</div>
				 		<button className='btn col s2 offset-s1 yellow' style={ styles.txt } onClick={this.SignUp}>Sign Up</button>
				 		<button className='btn col s2 offset-s1 yellow' style={ styles.txt }>Login</button>
				 	</div>
				</div>
			</div>
		)
	}
}
export default Home;