import React, { Component } from 'react';
import { Link } from 'react-router';
import Pantry from './Pantry';

const styles = {
	addBtn: { fontSize: '18px' },
	cborder: { borderBottom: '1px solid grey', margin: '0 15px' },
	strike: { textDecoration: 'line-through' },
	ingInput: { margin: '0'},
	input: { borderBottom: '2px solid #414E49', margin: '0 0 0 5px'}
}

class ListIngs extends Component {
	constructor(props) {
		super(props);
		this.handleAddIngredient = this.handleAddIngredient.bind(this);
		this.displayIngredients = this.displayIngredients.bind(this);
		this.deleteIngredient = this.deleteIngredient.bind(this);
		this.addIngredientToPantry = this.addIngredientToPantry.bind(this);
		this.state = { listIngredients: this.props.list.ingredients, listId: this.props.list.id };
	}

	displayIngredients() {
		let listIngredients = this.state.listIngredients.map( ingredientData => {
			return(
				<div className="row" key={ingredientData.ingredient.id} style={ styles.cborder } >
					<li>
						<div className='col s9'>
							<p> { ingredientData.ingredient.name } </p>
						</div>
						<div className='col s2'>
							<p>{ingredientData.ingredient.list_ing.qty_to_buy}</p>
						</div>
						<div className='col s1' >
							<div>
								<p className="btn-floating btn-xs grey">
						    <i className="xs material-icons" onClick={ () => this.deleteIngredient(ingredientData)}>delete</i></p>
							</div>
						</div>
					</li>
				</div>
			)
		})
		return listIngredients;
	}

	deleteIngredient(ingredientData) {
		let listIngredients = this.state.listIngredients;
		$.ajax({
			url: `/api/v1/list_ings/${ingredientData.ingredient.list_ing.id}`,
			type: 'DELETE',
			dataType: 'JSON',
			data: { list_id: this.state.listId }
		}).done( () => {
			let deleteIndex = listIngredients.findIndex( listIngredient => listIngredient.ingredient.id === ingredientData.ingredient.id);
			this.setState({
				listIngredients: [
					...listIngredients.slice(0, deleteIndex),
					...listIngredients.slice(deleteIndex + 1, listIngredients.length)
				]
			});
		}).fail( data => {
			console.log(data);
		});
	}

	handleAddIngredient(e) {
		e.preventDefault();
		let name = this.refs.addName.value;
		let qty_to_buy = this.refs.addQty.value;
		$.ajax({
			url: `/api/v1/list_ings`,
			type: 'POST',
			data: { list_id: this.state.listId, ingredient: { name }, list_ing: { qty_to_buy }},
			dataType: 'JSON'
		}).done( data => {
			console.log(data);
			this.setState({
				listIngredients: [
				   data,
				   ...this.state.listIngredients
				]
			});
			this.refs.addIngredientForm.reset();
		}).fail( data => {
			console.log(data);
		})
	}

	addIngredientToPantry(e, ingredientData) {
		e.preventDefault();
		let qty = ingredientData.ingredient.list_ing.qty_to_buy;
		let name = ingredientData.ingredient.name;
		let ingId = ingredientData.ingredient.id;
		$.ajax({
			url: `/api/v1/pantry_ingredients`,
			type: 'POST',
			data: { pantry_id: this.state.pantryId, ingredient: { name }, pantryIngredients: { qty }},
			dataType: 'JSON'
		}).done( data => {
			console.log(data);
			console.log('for the win');
		}).fail( data => {
			console.log(data);
		})
	}

	render() {
  	return (
    	<div className='row' >
    		<form ref='addIngredientForm' id='addIngredientForm' onSubmit={this.handleAddIngredient}>
					<button type="submit" className=" btn-floating btn-small waves-effect waves grey"><i className="material-icons">add</i>
					</button>
					<div className='col s8 offset-s1' style={ styles.ingInput }>
						<input style={ styles.input } type='text' ref='addName' placeholder='Ingredient Name' required/>
					</div>
					<div className='col s3'>
						<input style={ styles.input } type='number' ref='addQty' placeholder='QTY to Buy'/>
					</div>

				</form>
				<div className="row" style={ styles.cborder } >
					<div className='col s9'>
						<p> Ingredient </p>
					</div>
					<div className='col s2'>
						<p>Quantity to Buy</p>
					</div>
					<div className='col s1' >
						<p>Bought</p>
					</div>
				</div>
				<ul>
					{ this.displayIngredients() }
				</ul>
    	</div>
    )
	}
}

export default ListIngs;
