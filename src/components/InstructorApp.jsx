import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListTutorialsComponent from '../components/tutorial/ListTutorialsComponent';
import TutorialComponent from '../components/tutorial/TutorialComponent';

class InstructorApp extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListTutorialsComponent} />
                        <Route path="/tutorials" exact component={ListTutorialsComponent} />
                        <Route path="/tutorials/:id" component={TutorialComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp;