import React from 'react'
import ContactForm from './ContactForm'
import {act} from 'react-dom/test-utils'
import { render, unmountComponentAtNode } from "react-dom";
import {  findByDisplayValue,  } from '@testing-library/dom';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const firstName = 'first name';
const lastName = 'last name';
const email = 'email'
var phoneNumber = 'phone number';

it("Displays form elements", async () => {
  act(() => {
    render(<ContactForm firstName={firstName} lastName={lastName}
    email={email} phoneNumber={phoneNumber}/>, container);
  });

  var inputs = await findByDisplayValue(container,firstName)
  expect(inputs).toHaveValue(firstName)

  inputs = await findByDisplayValue(container,lastName)
  expect(inputs).toHaveValue(lastName)

  inputs = await findByDisplayValue(container,email)
  expect(inputs).toHaveValue(email)

  inputs = await findByDisplayValue(container,phoneNumber)
  expect(inputs).toHaveValue(phoneNumber)

});