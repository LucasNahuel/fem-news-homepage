
import { findByLabelText } from '@testing-library/react';
import React from 'react';

class Header extends React.Component{

    navigationMenuStyle = {
        'display' : 'none'
    }

    constructor(props){
        super(props);
        this.state = {
            navigationMenuOpen : false
        }
    }

    render(){
        return(
            <div className='header1'>
                <img src='/news-homepage-main/assets/images/logo.svg' ></img>

                <div className='header-links-container'>


                    <a>Home</a>
                    <a>New</a>
                    <a>Popular</a>
                    <a>Trending</a>
                    <a>Categories</a>



                </div>


                <div className='navigation-links-container' style={{display: this.state.navigationMenuOpen ? 'flex' : 'none'}}>

                    <button className='toggle-navigation close' onClick={() => this.toggleNavigation()}>
                            <img className='toggle-navigation-close-icon' src='/news-homepage-main/assets/images/icon-menu-close.svg'></img>
                    </button>

                    <a>Home</a>
                    <a>New</a>
                    <a>Popular</a>
                    <a>Trending</a>
                    <a>Categories</a>

                    

                </div>
                <button className='toggle-navigation' onClick={() => this.toggleNavigation()}>
                        <img className='toggle-navigation-icon' src='/news-homepage-main/assets/images/icon-menu.svg'></img>
                </button>
            </div>
        );
    }


    toggleNavigation(){
        let actualMenuState = this.state.navigationMenuOpen;
        this.setState({ navigationMenuOpen : !actualMenuState });
    }
}

export default Header;