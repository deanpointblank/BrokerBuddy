import React from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import launch from './CSS/Images/Splash_Launch.jpg'
import * as GI from 'react-icons/gi'
// import * as MD from 'react-icons/md'


function App() {

  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid" style={{backgroundImage: `url(${launch})`, backgroundSize: 'cover', height: '100vh', color: 'white'}}>
        <div className="container" style={{textAlign: 'center', verticalAlign: 'middle'}}>
          <h1 className="display-4">Broker Buddy</h1>
          <p className="lead">Launching you to financial freedom</p>
        </div>
      </div>
      <div className="container" style={{textAlign: 'center'}}>
        <h3>What we do</h3>
        <div className="row">
          <div className="col"><GI.GiBlast size='6em'/></div>
          <div className="col"><p>I'm baby drinking vinegar VHS letterpress, cornhole bicycle rights palo santo offal ugh food truck banjo. Glossier narwhal roof party direct trade kinfolk kombucha bushwick craft beer, fingerstache kitsch bespoke banjo vinyl. Chia etsy yuccie, man bun chicharrones unicorn vice leggings try-hard chillwave jianbing palo santo messenger bag. Art party la croix snackwave direct trade taxidermy activated charcoal gluten-free echo park hot chicken. Cold-pressed cred tbh succulents lo-fi gentrify. Ugh heirloom gochujang yuccie tacos sustainable.</p></div>
        </div>
        <hr className="my-10" style={{width: '33%'}}/>
        <h4>Stock tracking</h4>
        <div className="row">
          <div className="col"><p>Air plant YOLO waistcoat franzen stumptown enamel pin. Tousled photo booth keffiyeh chambray gastropub man bun 3 wolf moon. Pok pok church-key skateboard fashion axe. Green juice normcore retro, yuccie shoreditch cliche hella austin street art salvia tote bag godard cardigan.</p></div>
          <div className="col"><GI.GiChart size='6em'/></div>
        </div>
        <hr className="my-10" style={{width: '33%'}}/>
        <h4>Latest News</h4>
        <div className="row">
          <div className="col"><GI.GiNewspaper size='6em'/></div>
          <div className="col"><p>Banjo man braid pour-over snackwave, chicharrones la croix next level chillwave biodiesel. Chia put a bird on it venmo, jean shorts tilde taiyaki adaptogen hammock edison bulb af taxidermy man bun butcher asymmetrical poke. Church-key flannel kickstarter hella poutine blue bottle, skateboard swag taxidermy biodiesel schlitz keffiyeh synth godard. Roof party fixie biodiesel raw denim bitters pop-up succulents VHS glossier neutra. Drinking vinegar fashion axe you probably haven't heard of them copper mug, yr prism crucifix live-edge cornhole bespoke messenger bag cred occupy affogato.</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
