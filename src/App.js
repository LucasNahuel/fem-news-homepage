import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Header';

class App extends React.Component{

  render() {
    return (
      <div>
        <Header/>
        <div className='grid-container'>

          <div className='main-article'>
            <img className='main-image' src='/news-homepage-main/assets/images/image-web-3-desktop.jpg'></img>
            <img className='main-image-mobile' src='/news-homepage-main/assets/images/image-web-3-mobile.jpg'></img>

            <div className='main-article-body'>
              <h1 className='main-article-title'>The Bright Future of Web 3.0?</h1>
              <div className='main-article-description-container'>
                <p className='main-article-description'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>

                <button className='read-more-button'>
                  READ MORE
                </button>
              </div>
              
            </div>
          </div>

          <div className='side-articles'>
            <h2>New</h2>

            <h3 className='side-article-title'>Hydrogen VS Electric Cars</h3>
            <p className='side-article-subtitle'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className='side-news-divider'></div>

            <h3 className='side-article-title'>The Downsides of AI Artistry</h3>
            <p className='side-article-subtitle'>What are the possible adverse effects of on-demand AI image generation?</p>
            <div className='side-news-divider'></div>

            <h3 className='side-article-title'>Is VC Founding Drying Up?</h3>
            <p className='side-article-subtitle'>Private founding by VC firms is down 50% YOY. We take a look at what that means.</p>
            
          </div>
            <div className='foot-article'>
              <img className='foot-article-image' src='/news-homepage-main/assets/images/image-retro-pcs.jpg'></img>
              <div>
                <h3 className='foot-article-number'>01</h3>
                <p className='foot-article-title'>Reviving Retro PCs</p>
                <p className='foot-article-subtitle'>What happens when old PCs are given modern upgrades?</p>
              </div>
              
            </div>
            <div className='foot-article'>
              <img className='foot-article-image' src='/news-homepage-main/assets/images/image-top-laptops.jpg'></img>
              <div>
                <h3 className='foot-article-number'>02</h3>
                <p className='foot-article-title'>Top 10 Laptops of 2022</p>
                <p className='foot-article-subtitle'>Our best picks for various needs and budgets.</p>
              </div>
              
            </div>
            <div className='foot-article'>
              <img className='foot-article-image' src='/news-homepage-main/assets/images/image-gaming-growth.jpg'></img>
              <div>
                <h3 className='foot-article-number'>03</h3>
                <p className='foot-article-title'>The Growth of Gaming</p>
                <p className='foot-article-subtitle'>How the pandemic has sparked fresh opportunities.</p>
              </div>
              
            </div>

        </div>
    
      </div>

  );  
  }
}

export default App;
