import React from "react";
import { Link } from "react-router-dom";
import ImageService from '../API/ImageService';

const initFormState = {
    name: "",
    category: "",
    file: null,
    description: "",
    persons: "",
    objects: "",
    published: true,
    imageAdded: null,
}

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initFormState, imageAdded: null};
    }

    handleSubmit = e => {
        e.preventDefault();
        ImageService.create(this.state).then(imageAdded => this.setState({...initFormState, imageAdded}));
    };

    handleAnalyzeButton = () => {
        ImageService.analyze(this.state.file).then(data => this.setState({...data}));
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return (
            <div className="container">
                <h1>UPLOAD</h1>
                <form onSubmit={this.handleSubmit} className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="MyBeautifulImage" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCategory" className="form-label">Category</label>
                        <input type="text" className="form-control" id="inputCategory" name="category" value={this.state.category} onChange={this.handleInputChange} placeholder="Landscape" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputFile" className="form-label">Image</label>
                        <div className="col-12 input-group">
                            <input type="file" className="form-control" id="inputFile" aria-label="Upload"  onChange={e => this.setState({ file: e.target.files[0] })} required/>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.handleAnalyzeButton} id="analyzeButton">Analyze</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea className="form-control" id="inputDescription" name="description" value={this.state.description} onChange={this.handleInputChange} rows="3" placeholder="about your image"></textarea>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputPersons" className="form-label">Persons</label>
                        <input type="number" className="form-control" id="inputPersons" name="persons" value={this.state.persons} onChange={this.handleInputChange} placeholder="2"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputObject" className="form-label">Objects</label>
                        <input type="text" className="form-control" id="inputObject" name="objects" value={this.state.objects} onChange={this.handleInputChange} placeholder="Truck, Table, Seat"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" name="published" onChange={this.handleInputChange} checked={this.state.published}/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                published
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
                {
                    (this.state.imageAdded) &&
                        <div className="alert alert-success" role="alert">
                            Successfully added your <Link to={`/details/${this.state.imageAdded.id}`}>image</Link> !
                        </div>
                }
            </div>
        );
    }
}