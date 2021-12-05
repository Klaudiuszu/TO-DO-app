import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';

class Column extends React.Component {

    render() {
        const {title} = this.props;
        return (
            
        <section className={styles.component}>
            <h3 className={styles.title}>{title}</h3>
        </section>
        
        )
    }
}

export default Column;