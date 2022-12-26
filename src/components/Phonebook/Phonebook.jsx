import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/store';

import {
  FormStyled,
  Input,
  ErrorMessageStyled,
  ErrorText,
  Label,
  Button,
} from './Phonebook.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessageStyled
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(4).max(10).required(),
});

export const ContactForm = ({ onFormSubmitHandler }) => {
  const { contacts } = useSelector(state => state.myValue);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    actions.resetForm();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === values.name.toLowerCase()) {
        // actions.resetForm();
        return alert(`${values.name} is already in contacts`);
      }
    }
    dispatch(addContact(values));
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>Name</Label>
        <Input type="text" name="name" />
        <FormError name="name" />

        <Label>Number</Label>
        <Input type="tel" name="number" />
        <FormError name="number" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmitHandler: PropTypes.func,
};
