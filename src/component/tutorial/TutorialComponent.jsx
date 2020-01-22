import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TutorialDataService from '../../service/TutorialDataService';

class TutorialComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tutorialName: '',
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        TutorialDataService.retrieveTutorial(this.state.id)
            .then(response => this.setState({
                tutorialName: response.data.tutorialName,
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.tutorialName) {
            errors.tutorialName = 'Enter a Tutorial Name'
        } else if (values.tutorialName.length < 5) {
            errors.tutorialName = 'Enter atleast 5 Characters in Tutorial Name'
        }
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {

        let tutorial = {
            id: this.state.id,
            tutorialName: values.tutorialName,
            description: values.description
        }

        if (this.state.id === -1) {
            TutorialDataService.createTutorail(tutorial)
                .then(() => this.props.history.push('/tutorials'))
        } else {
            TutorialDataService.updateTutorial(this.state.id, tutorial)
                .then(() => this.props.history.push('/tutorials'))
        }

        console.log(values);
    }

    render() {
        let { tutorialName, description, id } = this.state

        return (
            <div>
                <h3>Tutorial</h3>
                <div className="container">
                    <Formik
                        initialValues={{ tutorialName, description, id }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="tutorialName" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Tutorial Name</label>
                                        <Field className="form-control" type="text" name="tutorialName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TutorialComponent;