import React from 'react';

const Generator = ({ figure, setFigure, formValues, setFormValues }) => {

    const { x, y, blur, spreed, color } = formValues;

    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='form__container'>
            <p className='form__title'>Opciones de sombra</p>
            <form className='form'>

                <div className='form__field'>
                    <label className='form__label'>Figura: </label>
                    <select
                        className='form__input'
                        value={ figure }                        onChange={ (e) => setFigure(e.target.value)}
                    >
                        <option value="rectangle">Rectangulo</option>
                        <option value="square">Cuadrado</option>
                        <option value="circle">Circulo</option>
                    </select>
                </div>
                <div className='form__field'>
                    <label className='form__label'>Sombra en X: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                        name='x'
                        value={x}
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Sombra en Y: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                        name='y'
                        value={y}
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Desenfoque: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                        name='blur'
                        value={blur}
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Propagación: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                        name='spreed'
                        value={spreed}
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Color: </label>
                    <input 
                        type="text"
                        className='form__input'
                        name='color'
                        value={color}
                        onChange={ handleInputChange }
                    />
                </div>
                
            </form>
        </div>
    );
}
 
export default Generator;