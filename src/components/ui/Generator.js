import React from 'react';

const Generator = () => {
    return (
        <div className='form__container'>
            <p className='form__title'>Opciones de sombra</p>
            <form className='form'>
                <div className='form__field'>
                    <label className='form__label'>Sombra en X: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Sombra en Y: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Desenfoque: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Propagación: </label>
                    <input 
                        type="range"
                        className='form__input'
                        min={-100}
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label'>Color: </label>
                    <input 
                        type="text"
                        className='form__input'
                    />
                </div>
                
            </form>
        </div>
    );
}
 
export default Generator;