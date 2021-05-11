import React from 'react';
import ImageService from '../API/ImageService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';

import './Details.css';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            image: {}
        };
    }

    async componentDidMount() {
        const image = await ImageService.get(this.props.imageId);
        this.setState({ image, loading: false }, () => console.log(this.state));
    }
    

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>;
        } else {
            const { name, description, date, category, objects, nbPersons, imageUrl } = this.state.image;
            return (
                <div>
                    <div class="apercu d-flex flex-row-reverse" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <a class="my-link-white" style={{ paddingRight: "2rem" }} href={imageUrl} download>
                            <FontAwesomeIcon  icon={faDownload} style={{fontSize: "2rem"}}/>
                        </a>
                    </div>
                    <div >
                        <div class="d-flex flex-row justify-content-center">
                            <h1>{name}</h1>
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                            <h3 class="me-4">Date: {new Date(date).toISOString().split('T')[0]}</h3>
                            <h3>Category: {category}</h3>
                        </div>
                        <h3>{description}</h3>  
                    </div>
                </div>
            );
        }
    }
}


{/* <div class="dropdown">
                            <a class="my-link-white dropdown-toggle" style={{paddingRight: "2rem"}}>
                                <FontAwesomeIcon  icon={faEllipsisH} style={{fontSize: "5rem"}}/>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div> */}