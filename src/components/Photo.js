import React from 'react';
import { Link } from "react-router-dom";
import './Photo.css';

export default class Photo extends React.Component {
    render() {
        const { id, name, imageUrl } = this.props;
        return (
            <div class="col">
                <div class="hovereffect">
                    <img src={imageUrl} class="img-thumbnail rounded float-start" alt="..." />
                    <Link to={`/details/${id}`}>
                        <div class="overlay">
                            <h2>{name}</h2>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}