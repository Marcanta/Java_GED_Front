import React from "react";
import ImageService from '../API/ImageService';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            file: null,
            description: "",
            persons: "",
            objects: "",
            published: false,
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        ImageService.create(this.state);
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
                <form onSubmit={this.handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="MyBeautifulImage"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCategory" className="form-label">Category</label>
                        <input type="text" className="form-control" id="inputCategory" name="category" value={this.state.category} onChange={this.handleInputChange} placeholder="Landscape"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputFile" className="form-label">Image</label>
                        <div className="col-12 input-group">
                            <input type="file" className="form-control" id="inputFile" aria-label="Upload"  onChange={e => this.setState({ file: e.target.files[0] })}/>
                            <button className="btn btn-outline-secondary" type="button" id="analyzeButton">Analyze</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea className="form-control" id="inputDescription" name="description" value={this.state.description} onChange={this.handleInputChange} rows="3" placeholder="about your image"></textarea>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputPersons" className="form-label">Persons</label>
                        <input type="text" className="form-control" disabled id="inputPersons" name="persons" value={this.state.persons} onChange={this.handleInputChange} placeholder="Pierre, Paul, Jacques"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputObject" className="form-label">Objects</label>
                        <input type="text" className="form-control" disabled id="inputObject" name="objects" value={this.state.objects} onChange={this.handleInputChange} placeholder="Truck, Table, Seat"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" name="published" onChange={this.handleInputChange} checked={this.state.published}/>
                            <label className="form-check-label" for="gridCheck">
                                published
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}