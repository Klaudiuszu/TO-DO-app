import PropTypes from 'prop-types';
import React from 'react';
import styles from '../List/List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
        title:  PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }
    
    render() {
    return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} />
            <div className={styles.description}>
                {this.props.description}

            </div>

            <div className={styles.columns}>
                <Column title='Animals'></Column>
                <Column title='Plants'></Column>
                <Column title='Minerals'></Column>
            </div>
            

        </section>
        )
    }
}

export default List;