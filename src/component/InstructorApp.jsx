import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListCoursesComponent from '../component/ListCoursesComponent';
import CourseComponent from '../component/CourseComponent';

class InstructorApp extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp;