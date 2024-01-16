// Card.test.js
//vérifie  que le composant Card peut être rendu sans générer d'erreurs
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../src/components/Card';

test('renders Card component without errors', () => {
    render(<Card />);

  });