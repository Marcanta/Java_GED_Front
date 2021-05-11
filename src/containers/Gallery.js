import React from 'react';
import Photo from '../components/Photo';
import ImageService from '../API/ImageService';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      categories: [],
      selectedCategory: "."
    };
  }
  
  async componentDidMount() {
    const images = await ImageService.getAll();
    const categoriesDirty = images.map(image => image.category);
    const categories = Array.from(new Set(categoriesDirty));
    this.setState({ images, categories }, () => console.log(this.state));
  }
  
  render() {
    const { images, categories, selectedCategory } = this.state;
    console.log(selectedCategory);
    return (
      <div class="container">
        <div class="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" onChange={() => this.setState({ selectedCategory: "." })} value="." autocomplete="off" checked={selectedCategory === '.'}/>
          <label class="btn btn-outline-primary" for="btnradio1">All</label>
          {categories.map(category => (
            <>
              <input type="radio" class="btn-check" name="btnradio" onChange={() => this.setState({ selectedCategory: category })} id={category} value={category} autocomplete="off"/>
             <label class="btn btn-outline-primary" for={category}>{category}</label>
            </>
          ))}
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {images.filter(image => image.published && image.category.match(selectedCategory)).map(photo => <Photo key={Math.random()*1000} {...photo} />)}
        </div>
      </div>
    );
  }
}