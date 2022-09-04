import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; //if the route uses a parameter, you need useParams hook
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleCocktail } from '../redux/features/cocktailSlice';

const SingleCocktail = () => {
    const { cocktail, loading } = useSelector((state) => ({ ...state.app })); //access the store/state
    const [modifiedCocktail, setModifiedCocktail] = useState([]); //still have to scrub information the way we want
    //it looks like this illustrates the need to have a global state available to all components, and a state only really applicable to the current component. It
    //really depends upon the attribute and what needs to access it.
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleCocktail({ id }));
    }, [id, dispatch]); //will only run with a (new) id

    useEffect(() => {
        if (cocktail.length > 0) {
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            } = cocktail[0];

            const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            ];

            const newCocktail = {
                name,
                image,
                info,
                category,
                glass,
                instructions,
                ingredients,
            };
            setModifiedCocktail(newCocktail);
        } else {
            setModifiedCocktail(null);
        }
    }, [id, cocktail]); //will only run when we have id and a cocktail
    if (!modifiedCocktail) {
        return <h2 className="section-title">No Cocktail to Display</h2>;
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = modifiedCocktail;
        return (
            <>
                {loading ? (
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">loading...</span>
                    </div>
                ) : (
                    <section className="section cocktail-section">
                        <Link to="/">
                            <button
                                className="btn btn-danger"
                                style={{ marginTop: '2rem' }}
                            >
                                Go Back
                            </button>
                        </Link>
                        <h2 className="section-title">{name}</h2>
                        <div className="drink">
                            <img src={image} alt={name} />
                            <div className="drink-info">
                                <p>
                                    <span className="drink-data">Name: </span>{' '}
                                    {name}
                                </p>
                                <p>
                                    <span className="drink-data">
                                        Category:{' '}
                                    </span>{' '}
                                    {category}
                                </p>
                                <p>
                                    <span className="drink-data">Info: </span>{' '}
                                    {info}
                                </p>
                                <p>
                                    <span className="drink-data">Glass: </span>{' '}
                                    {glass}
                                </p>
                                <p>
                                    <span className="drink-data">
                                        Instructions:{' '}
                                    </span>{' '}
                                    {instructions}
                                </p>
                                <p>
                                    <span className="drink-data">
                                        Ingredients:{' '}
                                    </span>{' '}
                                    {ingredients &&
                                        ingredients.map((item, index) => {
                                            return item ? (
                                                <span key={index}>{item}</span>
                                            ) : null;
                                        })}
                                </p>
                            </div>
                        </div>
                    </section>
                )}
            </>
        );
    }
};

export default SingleCocktail;
