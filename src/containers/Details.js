import React from 'react';
import ImageService from '../API/ImageService';
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
            const { name, description, imageUrl } = this.state.image;
            return (
                <div>
                    <div class="apercu" style={{ backgroundImage: `url(${imageUrl})`}}>
                    </div>
                    <h1>{name}</h1>
                    <h2>For {this.props.imageId}</h2>
                    <p>{description}</p>
                </div>
            );
        }
    }
}