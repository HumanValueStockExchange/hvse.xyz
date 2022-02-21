import ReactCardCarousel from "react-card-carousel";
import {
  container,
  card,
}from './css/objects/features.module.css';
import * as React from 'react';
import {FormattedMessage} from "react-intl";

function Carousel() {
  return (
      <div className={container}>
        <ReactCardCarousel autoplay={true} autoplay_speed={8000}>
          <div><div className={card}>
    <p className="text-xl font-semibold" style={{fontSize: '1.25rem', lineHeight:'1.75rem', fontWeigth:'600', textAlign:'center',  color:'var(--textNormal)'}}><FormattedMessage id="zoe1" defaultMessage='Loans refunding'/></p>
    <div className="flex items-center mt-8" style={{marginBottom:'8px', display:'flex', marginLeft:'10px'}}>
      <img
        className="w-12 h-12 mr-4"
        style={{maxWidth:'150px', maxHeight:'150px', marginRight:'10px'}}
        src='https://raw.githubusercontent.com/HumanValueStockExchange/hvse.xyz/master/src/images/stories%20board/zoe.png'
        alt="Zoe"
      />
      <div>
        <p className="mt-6" style={{marginTop:'6', marginLeft:'10px', marginRight:'10px', textAlign:'left', fontStyle:'italic',  color:'var(--textNormal)'}}><FormattedMessage id="zoe2" defaultMessage="As a government-funded student, I will have to work in addition to my studies; but thanks to my tokenization, I have not to do it! That allowed me to help me raise funds for my future business and my student loan!"/></p>
      <p style={{textAlign:"left", marginLeft:'10px', marginRight:'10px'}}>Zoe, <span className="text-sm text-gray-600" style={{ color:'var(--textNormal)'}}><FormattedMessage id="zoe3" defaultMessage="Law Student"/></span></p>
      </div>
    </div>
  </div></div>
          <div><div className={card}>
    <p className="text-xl font-semibold" style={{fontSize: '1.25rem', lineHeight:'1.75rem', fontWeigth:'600', textAlign:'center',  color:'var(--textNormal)'}}><FormattedMessage id="bill1" defaultMessage='Making profits by helping'/></p>
    <div className="flex items-center mt-8" style={{marginBottom:'8px', display:'flex', marginLeft:'10px'}}>
      <img
        className="w-12 h-12 mr-4"
        style={{maxWidth:'150px', maxHeight:'150px', marginRight:'10px'}}
        src='https://raw.githubusercontent.com/HumanValueStockExchange/hvse.xyz/master/src/images/stories%20board/bill.png'
        alt="Bill"
      />
      <div>
        <p className="mt-6" style={{marginTop:'6', marginLeft:'10px', marginRight:'10px', textAlign:'left', fontStyle:'italic',  color:'var(--textNormal)'}}><FormattedMessage id="bill2" defaultMessage="As an usual crypto hodler, I expect some pecunial profits for my investments. This system has the ability to combine 2 opposed concepts: profit and altruism!"/></p>
      <p style={{textAlign:"left", marginLeft:'10px', marginRight:'10px'}}>Bill, <span className="text-sm text-gray-600" style={{ color:'var(--textNormal)'}}><FormattedMessage id="bill3" defaultMessage="Serial staker"/></span></p>
      </div>
    </div>
  </div></div>
          <div><div className={card}>
    <p className="text-xl font-semibold" style={{fontSize: '1.25rem', lineHeight:'1.75rem', fontWeigth:'600', textAlign:'center',  color:'var(--textNormal)'}}><FormattedMessage id="amy1" defaultMessage='THE "social network"'/></p>
    <div className="flex items-center mt-8" style={{marginBottom:'8px', display:'flex', marginLeft:'10px'}}>
      <img
        className="w-12 h-12 mr-4"
        style={{maxWidth:'150px', maxHeight:'150px', marginRight:'10px'}}
        src='https://raw.githubusercontent.com/HumanValueStockExchange/hvse.xyz/master/src/images/stories%20board/amy.png'
        alt="Amy"
      />
      <div>
        <p className="mt-6" style={{marginTop:'6', marginLeft:'10px', marginRight:'10px', textAlign:'left', fontStyle:'italic',  color:'var(--textNormal)'}}><FormattedMessage id="amy2" defaultMessage="Traditional business angels are elitist, and unreachable. HVSE allows everyone to invest in others! This is the social future that is being created here!"/></p>
      <p style={{textAlign:"left", marginLeft:'10px', marginRight:'10px'}}>Amy, <span className="text-sm text-gray-600" style={{ color:'var(--textNormal)'}}><FormattedMessage id="amy3" defaultMessage="Business angel"/></span></p>
      </div>
    </div>
  </div></div>
        </ReactCardCarousel>
        </div>
);
}

export default Carousel;
