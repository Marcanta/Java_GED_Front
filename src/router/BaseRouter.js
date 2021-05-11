import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Gallery from '../containers/Gallery';
import NavBar from '../containers/NavBar';
import Details from '../containers/Details';
import Upload from '../containers/Upload';


export default class BaseRouter extends React.Component {      
    Image(props) {
        const { params } = props.match;
        return <Details { ...params } />;
    }

    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/details/:imageId" component={this.Image}/>
                    <Route path="/upload">
                        <Upload/>
                    </Route>
                    <Route path="/">
                        <Gallery/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}