import React from 'react';
import { fiveSquema, fourSquema, principalSquema, threeSquema, twoSquema } from '../../helpers/colors';

const Header = () => {
    const handleChangeColor = (e) => {

        const rootStyles = document.documentElement.style;
        if( e.target.className.includes('principal') ) principalSquema( rootStyles );

        else if( e.target.className.includes('two')) twoSquema( rootStyles );

        else if( e.target.className.includes('three')) threeSquema( rootStyles );

        else if( e.target.className.includes('four')) fourSquema( rootStyles );
        else fiveSquema( rootStyles );
        
    }
    return (
        <header className='header'>
            <h1 className='header__title'>Generador de sombras</h1>

            <div 
                className='colors'
                onClick={ handleChangeColor }
            >
                <div className='colors__item colors__item--principal'></div>
                <div 
                    className='colors__item colors__item--two'
                ></div>
                <div 
                    className='colors__item colors__item--three'></div>
                <div 
                    className='colors__item colors__item--four'></div>
                <div 
                    className='colors__item colors__item--five'></div>
                

            </div>
        </header>
    );
}
 
export default Header;