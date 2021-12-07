import React from 'react';
import styles from '../Card/Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {

    static propTypes = {
        title:  PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    render(){
        console.log(this.props)
        const {title} = this.props;
        return(

        <div>{title}</div>

        )
    }

}

export default Card;