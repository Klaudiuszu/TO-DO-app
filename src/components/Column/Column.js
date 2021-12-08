import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
class Column extends React.Component {


  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
  };

  state = {
    cards: this.props.cards || [],
  };

  addCard(title){
    this.setState(state => ({
      cards: [
        ...state.cards,
        {
          key:state.cards.length ? state.cards[state.cards.length-1].
            key+1 : 0,
          title,
        },
      ],
    }
    ));
  }

  render() {
    const {title, icon} = this.props;

    return (

      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>

        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>

      </section>

    );
  }
}

export default Column;