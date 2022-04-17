import React from 'react';
import "../../components/css/objects/stock.css";
import { StaticImage } from 'gatsby-plugin-image';

var Component = React.Component;

class Stock extends Component {
  render() {
		return (
		  <div class="navi-data-strip" style={{marginTop:'10px'}}>
		  <div><StaticImage style={{maxWidth:"70px", display:'flex', top:'25px', bottom:'25px', left:'15px'}}
        alt="HVSE logo"
        src="../logos/logo.jpeg"
      /></div>
		  <div class="navi-data-strip__ticker-viewport">
		<div class="navi-data-strip__ticker-viewport-inner">
		<ul class="navi-data-strip__tickers-list-first" style={{left: "-794.6370849609375px"}}><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">$HVSE</div>
                <div class="navi-data-strip__ticker-market-price">4510.50</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+34.750</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.78%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">ELON</div>
                <div class="navi-data-strip__ticker-market-price">35329</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+360</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+1.03%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">VITALIK</div>
                <div class="navi-data-strip__ticker-market-price">4129.25</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+8.690</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.21%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">KIM</div>
                <div class="navi-data-strip__ticker-market-price">7567.07</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-6.400</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.08%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">TESS</div>
                <div class="navi-data-strip__ticker-market-price">15242.38</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+35.740</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.23%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">LAURA</div>
                <div class="navi-data-strip__ticker-market-price">27284.52</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+35.650</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.13%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">MICHI</div>
                <div class="navi-data-strip__ticker-market-price">3452.63</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+23.048</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.67%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">CHARLIE</div>
                <div class="navi-data-strip__ticker-market-price">4517.27</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+33.400</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.74%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">$HVSE</div>
                <div class="navi-data-strip__ticker-market-price">2041.72</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+29.12</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+1.45%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">HVSE</div>
                <div class="navi-data-strip__ticker-market-price">95.57</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.167</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.18%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="/quote/USDJPY:CUR" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">EUR-HVSE</div>
                <div class="navi-data-strip__ticker-market-price">115.49</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.390</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.34%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">HVSE-USD</div>
                <div class="navi-data-strip__ticker-market-price">1.14</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.002</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.17%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">TIM</div>
                <div class="navi-data-strip__ticker-market-price">1828.32</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+7.85</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.43%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">BILL</div>
                <div class="navi-data-strip__ticker-market-price">519.53</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.245</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.05%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">ZOE</div>
                <div class="navi-data-strip__ticker-market-price">89.87</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-1.450</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-1.59%</div>
            </a>
        </li><li class="navi-data-strip__ticker">
            <a href="#" class="navi-data-strip__ticker-link">
                <div class="navi-data-strip__ticker-label">AMY</div>
                <div class="navi-data-strip__ticker-market-price">91.17</div>
                <div class="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-1.520</div>
                <div class="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-1.64%</div>
            </a>
        </li></ul>
		</div></div></div>
		);
	}
}


export default Stock;






