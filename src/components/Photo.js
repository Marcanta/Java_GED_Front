import React from 'react';
import { Link } from "react-router-dom";
import './Photo.css';

export default class Photo extends React.Component {
    render() {
        const { id, name, imageUrl } = this.props;
        return (
            <div className="col mb-2">
                <div className="hovereffect">
                    <img src={imageUrl} className="img-thumbnail rounded float-start" alt="..." />
                    <Link to={`/details/${id}`}>
                        <div className="overlay">
                            <h2>{name}</h2>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}