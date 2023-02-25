
import styled from 'styled-components';
import { Form, Field, ErrorMessage as FormikError } from 'formik';


export const FormAdd = styled(Form)`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width: 500px;
gap: 10px;

`;

export const Input = styled(Field)`
border: 1px solid black;
border-radius: 7px;
padding: 4px;
`;

export const Btn = styled.button`
border: 1px solid black;
border-radius: 7px;
width: 150px;
padding: 4px;
margin-left: auto;
margin-right: auto;
margin-top: 19px;
background-color: #92bbe8;
box-shadow: 3px 2px 2px #727171;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;