import { Component } from 'react';
import Form from './Form/Form';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    const { contacts, name } = this.state;
    return <Form name={name} />;
  }
}
