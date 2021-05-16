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
      <div className="container">
        <div className="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onChange={() => this.setState({ selectedCategory: "." })} value="." autoComplete="off" checked={selectedCategory === '.'}/>
          <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>
          {categories.map(category => (
            <React.Fragment key={category}>
              <input type="radio" className="btn-check" name="btnradio" onChange={() => this.setState({ selectedCategory: category })} id={category} value={category} autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor={category}>{category}</label>
            </React.Fragment>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {images.filter(image => image.published && image.category.match(selectedCategory)).map(photo => <Photo key={photo.id} {...photo} />)}
        </div>
      </div>
    );
  }
}