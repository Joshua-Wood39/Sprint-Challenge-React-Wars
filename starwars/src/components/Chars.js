import React from 'react';
import './Chars.css';

const Chars = props => {
    return (
        <div className="charCard">
            <div className="cardDisplay">
                <div className="cardImg">
                    <img src="" className="img" alt="image here"/>
                
                </div>
                <div className="cardContents">
                    <div className="cardHeader">
                        <h2>{props.charName}</h2>
                    </div>
                    <div className="cardData">
                        <div>Gender: {props.charGender}</div>
                        <div>Hair Color: {props.charHair}</div>
                        <div>Eye Color: {props.charEye}</div>
                        <div>Height: {props.charHeight}</div>
                        <div>Mass: {props.charMass}</div>
                        <div>Born: {props.charBirth}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chars;