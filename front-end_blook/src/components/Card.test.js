// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';//msw simule les requêtes HTTP dans les tests unitaires
import { setupServer } from 'msw/node';
import Card from './Card';

const server = setupServer(
  rest.get('https://api.example.com/data', (req, res, ctx) => {
    return res(ctx.json({}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders cards with recipe names and images', () => {
  render(<Card />);

  
  expect(screen.getByTestId('card-component')).toBeInTheDocument();
  expect(screen.getByTestId('image-element')).toBeInTheDocument();
  expect(screen.getByTestId('name-element')).toBeInTheDocument();
});

test('fetches data and renders text', async () => {
  render(<Card />);

  // Attend que le texte "Data fetched successfully" soit rendu
  await screen.findByText('Data fetched successfully');

  // Aucun besoin de vérifier l'appel à fetch ici car msw gère l'interception des requêtes.
});
