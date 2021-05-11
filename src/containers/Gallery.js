import React from 'react';
import Photo from '../components/Photo';
import ImageService from '../API/ImageService';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      categories: [],
    };
  }
  
  async componentDidMount() {
    const images = await ImageService.getAll();
    const categoriesDirty = images.map(image => image.category);
    const categories = Array.from(new Set(categoriesDirty));
    this.setState({ images, categories }, () => console.log(this.state));
  }
  
  render() {
    return (
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {this.state.images.map(photo => <Photo key={Math.random()*1000} {...photo} />)}
        </div>
      </div>
    );
  }
}