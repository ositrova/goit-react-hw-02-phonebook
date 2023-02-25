import PropTypes from 'prop-types';
import { Component } from "react";
import {FormAdd, Input, Btn, ErrorMessage} from './PhoneForm.style'
import { Formik } from 'formik';
import * as yup from 'yup';


export class PhoneForm extends Component{
    state = {
        name: '',
        number: '',
      };
    
      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
          [name]: value,
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state }); //передает props родителю
        this.setState({ name: '', number: '' }); //reset обнуляет input
      };

      schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.number().positive().required(),
      });
    
    
    render() {
        const {handleChange, handleSubmit} = this;
        const {name, number} = this.state;
        const initialValues = { name: '', number: '' };
        return (
            <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={this.schema}
      >
<FormAdd onSubmit={handleSubmit}>
    <label> Name : </label>
        
    <Input
   type="text"
   name="name"
   placeholder="Ivanov Ivan"
   onChange={handleChange}
   value={name}
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
/>
<ErrorMessage name="name" component="span" />

    <label> Number : </label>
        
    <Input
  type="tel"
  name="number"
  placeholder="067 777 77 77"
  onChange={handleChange}
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  
/>
<ErrorMessage name="number" component="span" />
  
    <Btn type="submit">Add contact</Btn>
</FormAdd>
</Formik>
        )
    }
}    

PhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}