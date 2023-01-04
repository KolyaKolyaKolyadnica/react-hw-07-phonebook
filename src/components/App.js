import { Component } from 'react';
import { connect } from 'react-redux';

import { getContacts } from '../redux/phonebook/phonebook-options';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.testTest();
  }

  filterByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <div className={style.container}>
          <div className={style.menu}>
            <h1>Phonebook</h1>

            <ContactForm />

            <Filter />
          </div>

          <div className={style.contacts}>
            <h2>Contacts</h2>

            <ContactList />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  testTest: e => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
