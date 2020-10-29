// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './components/ContactForm';

test('Animal form accepts text in the form  fields', ()=> {
    render(<ContactForm />);


    const firstNameInput = screen.getByLabelText(/First Name*/i);
})


