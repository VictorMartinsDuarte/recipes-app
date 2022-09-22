import React, { useContext } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import RecipesContext from '../contexts/RecipesContext';

export default function FavoriteRecipes() {
  const { favoriteRecipeType } = useContext(RecipesContext);

  return (
    <>
      <Header title="Receitas Favoritas" />
      localStorage.getItem("")
      <input type="image" alt="Imagem do item" />
      <span>Category</span>
      <span>Area</span>
      <p>Alchoholic</p>
      <input
        type="image"
        src={ shareIcon }
        alt="Share button"
      />
      <input
        type="image"
        src={ blackHeart }
        alt="favorite icon"
        data-testid="favorite-btn"
      />
    </>
  );
}
