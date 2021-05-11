import React from 'react';
import './Photo.css';

export default class Photo extends React.Component {
    render() {
        const { name, imageUrl } = this.props;
        return (
            <div class="col">
                <div class="hovereffect">
                    <img src={imageUrl} class="img-thumbnail rounded float-start" alt="..." />
                    <div class="overlay" onClick={()=>console.log("toto")}>
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
        )
    }
}