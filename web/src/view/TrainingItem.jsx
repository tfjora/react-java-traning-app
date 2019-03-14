import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class TrainingItem extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render() {

        const {id, name, minutes, date} = this.props.trainingSession;
        return (
            <tr>
                <td>
                    <p> {name} </p>
                </td>
                <td>
                    <p> {minutes}</p>
                </td>
                <td>
                    <p> {date}</p>
                </td>
                <td>
                    <input type="button" onClick={this.onDeleteClick} value="Delete"/>
                    <Link to={`/edit/${id}`}><input type="button" value="Update"/></Link>
                </td>
            </tr>
        )
    };

    onDeleteClick() {
        this.props.deleteTrainingSessionWithIdFn(this.props.trainingSession.id)
    }
}

TrainingItem.propTypes = {
    trainingSession: PropTypes.instanceOf(Object).isRequired
};

export default TrainingItem;