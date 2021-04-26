import React from 'react'
import Contacts from './Contacts'
import {act} from 'react-dom/test-utils'
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { findByRole } from '@testing-library/dom';

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

const contacts = [{firtName:'fn', lastName:'ln', email:'e', id:1, phoneNumber:'p'}];


it("Displays all contacts", async () => {
  act(() => {
    render(<BrowserRouter><Contacts data={contacts}/></BrowserRouter>, container);
  });
 
  let table = await findByRole(container, 'table')

  expect(table).toBeInTheDocument(contacts[0].firtName)
  expect(table).toBeInTheDocument(contacts[0].lastName)
  expect(table).toBeInTheDocument(contacts[0].email)
  expect(table).toBeInTheDocument(contacts[0].phoneNumber)
});