import PropTypes from 'prop-types';
import React from 'react';
import styles from '../List/List.scss';
import Hero from '../Hero/Hero';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        children: PropTypes.node,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
    return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} titleLink={this.props.titleLink} />
            <div className={styles.description}>
                {this.props.children}
            </div>
        </section>
        )
    }
}

export default List;