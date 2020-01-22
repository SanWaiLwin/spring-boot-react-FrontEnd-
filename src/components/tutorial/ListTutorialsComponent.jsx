import React from 'react';
import TutorialDataService from '../../service/TutorialDataService';

class ListTutorialsComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tutorials: [],
            message: null
        }
        this.addTutorialClicked = this.addTutorialClicked.bind(this);
        this.updateTutorialClicked = this.updateTutorialClicked.bind(this);
    }

    componentDidMount() {
        this.refreshTutorials();
    }

    refreshTutorials() {
        TutorialDataService.retrieveAllTutorials().then(
            response => {
                console.log(response);
                this.setState({ tutorials: response.data })
            }
        )
    }

    deleteTutorialClicked(id) {
        TutorialDataService.deleteTutorial(id)
            .then(
                response => {
                    this.setState({ message: `Delete of tutorial ${id} Successful` });
                    this.refreshTutorials();
                }
            )
    }

    updateTutorialClicked(id) {
        this.props.history.push(`/tutorials/${id}`)
    }

    addTutorialClicked() {
        console.log('Hello');
        this.props.history.push(`/tutorials/-1`)
        console.log('World');
    }

    render() {
        return (
            <div className='container'>
                <h3>All Tutorials</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tutorial Name</th>
                                <th>Description</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tutorials.map(
                                    tutorial =>
                                        <tr key={tutorial.id}>
                                            <td>{tutorial.id}</td>
                                            <td>{tutorial.tutorialName}</td>
                                            <td>{tutorial.description}</td> 
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTutorialClicked(tutorial.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTutorialClicked(tutorial.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTutorialClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTutorialsComponent;