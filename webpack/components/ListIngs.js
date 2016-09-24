import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
	addBtn: { fontSize: '18px' },
	cborder: { border: '1px solid grey', borderRadius: '10px', margin: '10px' },
	strike: { textDecoration: 'line-through' }
}

class ListIngs extends Component {
	constructor(props) {
		super(props);
		this.handleAddIngredient = this.handleAddIngredient.bind(this);
		this.displayIngredients = this.displayIngredients.bind(this);
		this.deleteIngredient = this.deleteIngredient.bind(this);
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
							<p onClick={ () => this.deleteIngredient(ingredientData)} style={{ border: '1px solid grey', borderRadius: '10px' }}>X</p>
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

	render() {
  	return (
    	<div className='row'>
    		<form ref='addIngredientForm' id='addIngredientForm' onSubmit={this.handleAddIngredient}>
					<div className='col s9'>
						<input type='text' ref='addName' placeholder='Ingredient Name' required/>
					</div>
					<div className='col s3'>
						<input type='number' ref='addQty' placeholder='QTY to Buy'/>
					</div>
					<button style={ styles.addBtn } type="submit">Add Ingredient</button>
				</form>
				<ul>
					{ this.displayIngredients() }
				</ul>
    	</div>
    )
	}
}

export default ListIngs;