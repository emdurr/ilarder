import React, { Component } from 'react';
import { Link } from 'react-router';
import Recipe from './Recipe';
import RecipeListItem from './RecipeListItem';

const styles = {
	lcard: { fontSize: '40px' },
	aboutLink: { fontSize: '20px', color: 'black' },
  navBack: { backgroundColor: '#F9E883' }
}

class Recipes extends Component {
	constructor(props) {
		super(props);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
		this.displayRecipes = this.displayRecipes.bind(this);
    this.state = { recipes: [] };
  }

    componentWillMount() {
  		$.ajax({
  			url: '/api/v1/recipes',
  			type: 'GET',
  			dataType: 'JSON'
  		}).done( recipes => {
  			this.setState({ recipes: recipes.recipesArray });
  		}).fail( data => {
  			console.log('get recipes failed');
  		});
  	}

    deleteRecipe(id) {
      let recipes = this.state.recipes;
      $.ajax({
        url: `/api/v1/recipes/${id}`,
        type: 'DELETE',
        dataType: 'JSON'
      }).done( () => {
        let deleteIndex = recipes.findIndex( recipe => recipe.id === id);
        this.setState({
          recipes: [
            ...recipes.slice(0, deleteIndex),
            ...recipes.slice(deleteIndex + 1, recipes.length)
          ]
        })
      }).fail( data => {
				console.log(data);
			});
    }

    displayRecipes() {
      let recipes = this.state.recipes.map( recipe => {
        return(
          <RecipeListItem key={recipe.id} {...recipe} />
        )
      })
      return recipes;
    }

    handleAddRecipe(e) {
      e.preventDefault();
      let name = this.refs.addName.value;
      $.ajax({
        url: '/api/v1/recipes',
        type: 'POST',
        dataType: 'JSON',
        data: { recipe: { name }}
      }).done( recipe => {
        this.setState({
          recipes: [
            ...this.state.recipes,
            recipe
          ]
        });
        this.refs.addName.value = '';
      }).fail( data => {
        console.log(data);
      });
    }

    render() {
  		return(
  			<div className='center container'>
          <div>
    				<h1>Recipe Box</h1>
    				<Link to="/recipes/new" className='btn col s3 offset-s1 yellow' style={ styles.txt }>Add New Recipe</Link>
          </div>
  				<ul>
            {this.displayRecipes()}
  				</ul>
  			</div>
  		)
  	}

	}

export default Recipes;
