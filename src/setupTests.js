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
    const lastnameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email*/i);
    const messageInput = screen.getByLabelText(/Message*/i);

    // events with React testing library -- fireEvent
    fireEvent.change(firstNameInput, { target: {value: 'Erick'} });
    fireEvent.change(lastnameInput, { target: {value: 'Gonzalez'} });
    fireEvent.change(emailInput, { target: {value: 'erickgonzalez@outlook.com'} });
    fireEvent.change(messageInput, { target: {value: 'I like turtles'} });



    // click submit button
    const submitButton = screen.getByAltText(/submit/i);
    // fireEvent.click(submitButton); // clicks the button we've defined
})


