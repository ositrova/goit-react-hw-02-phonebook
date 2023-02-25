import PropTypes from 'prop-types';
import {Form, List, Text, Btn } from './PhoneList.style';

export const PhoneList = ({contacts, removeContact}) => {
    const elements = contacts.map(({ id, name, number }) => (
        <List key={id}>
                <Text>{name}</Text>
                <Text>{number}</Text>
                <Btn type='button' onClick={() => removeContact(id)}>Delete</Btn>
            </List>
      ));
      return <Form>{elements}</Form>;
    };
        
    

PhoneList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    removeContact: PropTypes.func.isRequired,
  };