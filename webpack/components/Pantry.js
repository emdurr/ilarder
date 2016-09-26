import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
	lcard: { fontSize: '40px' },
	aboutLink: { fontSize: '20px', color: 'black' },
  navBack: { backgroundColor: '#F9E883' },
  inForm: { border: '1px solid grey', borderRadius: '8px', padding: '15px', marginTop:' 15px', boxShadow: '10px 10px 5px #888888' }
}

class Pantry extends Component {
	constructor(props) {
		super(props);
		this.handleAddPantry = this.handleAddPantry.bind(this);
		this.handleAddIngredient = this.handleAddIngredient.bind(this);
		this.state = { pantries: [], pantryIngredients: [] };
	}

	componentWillMount() {
		$.ajax({
			url: '/api/v1/pantries',
			type: 'GET',
			dataType: 'JSON'
		}).done( pantry => {
			this.setState({ pantries: pantry });
		}).fail( data => {
			console.log('Failed!!')
		})
	}

	displayIngredients() {
		let pantryIngredients = this.state.pantryIngredients.map( ingredientData => {
			return(
				<div className="row" key={ingredientData.ingredient.id} style={ styles.cborder } >
					<li>
						<div className='col s9'>
							<p> { ingredientData.ingredient.name } </p>
						</div>
						<div className='col s2'>
							<p>{ingredientData.ingredient.pantryIngredients.qty}</p>
						</div>
						<div className='col s1' >
							<p onClick={ () => this.deleteIngredient(ingredientData)} style={{ border: '1px solid grey', borderRadius: '10px' }}>X</p>
						</div>
					</li>
				</div>
			)
		})
		return pantryIngredients;
	}


	handleAddIngredient(e) {
		e.preventDefault();
		let name = this.refs.addName.value;
		let qty = this.refs.addQty.value;
		$.ajax({
			url: `/api/v1/pantry_ingredients`,
			type: 'POST',
			data: { pantry_id: this.state.pantryId, ingredient: { name }, pantryIngredients: { qty }},
			dataType: 'JSON'
		}).done( data => {
			console.log(data);
			this.setState({
				pantryIngredients: [
				   data,
				   ...this.state.pantryIngredients
				]
			});
			this.refs.addIngredientForm.reset();
		}).fail( data => {
			console.log(data);
		})
	}

	handleAddPantry(e) {
		e.preventDefault();
		let name = this.refs.addName.value;
		$.ajax({
			url: '/api/v1/pantries',
			type: 'POST',
			dataType: 'JSON',
			data: { pantry: { name }}
		}).done( pantry => {
			this.setState({
				pantries: [
					pantry
				]
			});
			this.refs.addName.value = '';
		}).fail( data =>{
			console.log(data);
		});
	}

	render() {
		if (this.state.pantries === null) {
			return(
				<div className='container'>
					<h1>Name your Pantry</h1>
					<div style={ styles.inForm }>
						<form id='addForm' onSubmit={this.handleAddPantry}>
							<input type='text' ref='addName' placeholder='Pantry Name' required/>
							<button type="submit">Add</button>
						</form>
					</div>
				</div>
			)
		} else {
			return(
				<div className='center container'>
					<h1> { this.state.pantries.name } </h1>
					<div className='row'>
	    		<form ref='addIngredientForm' id='addIngredientForm' onSubmit={this.handleAddIngredient}>
						<div className='col s9'>
							<input type='text' ref='addName' placeholder='Ingredient Name' required/>
						</div>
						<div className='col s3'>
							<input type='number' ref='addQty' placeholder='QTY on Hand'/>
						</div>
						<button style={ styles.addBtn } type="submit">Add Ingredient</button>
					</form>
					<ul>
						{ this.displayIngredients() }
					</ul>
					</div>
				</div>
			)
		}
	}
}

export default Pantry;