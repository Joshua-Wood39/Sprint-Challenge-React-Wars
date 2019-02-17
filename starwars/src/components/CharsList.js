import React from 'react';
import Chars from './Chars';
import './Chars.css';

const CharsList = props => {
    return (
        <div className="charDeck">
            {props.characters.map(e => (
                <Chars 
                    charName={e.name}
                    charGender={e.gender}
                    charHair={e.hair_color}
                    charEye={e.eye_color}
                    charHeight={e.height}
                    charMass={e.mass}
                    charBirth={e.birth_year}
                />
            ))}
        </div>
    )
}


export default CharsList;