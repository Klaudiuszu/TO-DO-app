import React from 'react';
import styles from '../Card/Card.scss';


class Card extends React.Component {

    static propTypes = {
        title:  PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    render(){

        const {title} = this.props;

    }

}

export default Card;