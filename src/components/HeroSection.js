import react from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection(){
    return (
<div className='hero-container'>
<h1>FAMEMPIRE</h1>    
<h1>MARKENTISKA KOMPANIJA</h1>
<p>Vas uspeh je i nas uspeh</p>
<div className='hero-btns'>
    <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>
        Kontakt
    </Button>
</div>
</div>

    );
}

export default HeroSection