import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

beforeEach(() => {
  render(<App />);
})

test('load and dispaly App', async () => {
  const header = await waitFor(() => screen.getByTestId('header'));
  expect(header).toBeInTheDocument();
})
test('handle input change', async () => {
  const { getByTestId } = screen;
  const input = await waitFor(() => getByTestId('input'));
  fireEvent.change(input, { target: { value: 'https://jsonplaceholder.typicode.com/users' } });
  expect(input.value).toBe('https://jsonplaceholder.typicode.com/users');
})
test('handle submit', async () => {
  const { getByTestId } = screen;
  const input = await waitFor(() => getByTestId('input'));
  const submit = await waitFor(() => getByTestId('submit'));
  fireEvent.change(input, { target: { value: 'https://jsonplaceholder.typicode.com/users' } });
  fireEvent.click(submit);
  expect(input.value).toBe('https://jsonplaceholder.typicode.com/users');
});
test('handle click', async () => {
  const { getByTestId } = screen;
  const get = await waitFor(() => getByTestId('get'));
  const post = await waitFor(() => getByTestId('post'));
  const put = await waitFor(() => getByTestId('put'));
  fireEvent.click(get);
  expect(get.id).toBe('get');
  fireEvent.click(post);
  expect(post.id).toBe('post');
  fireEvent.click(put);
  expect(put.id).toBe('put');
});
test('handle results', async () => {
  const { getByTestId } = screen;
  const input = await waitFor(() => getByTestId('input'));
  const submit = await waitFor(() => getByTestId('submit'));
  fireEvent.change(input, { target: { value: 'https://jsonplaceholder.typicode.com/users' } });
  fireEvent.click(submit);
  const results = await waitFor(() => getByTestId('results'));
  expect(results).toBeInTheDocument();
});