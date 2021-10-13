import React from 'react';
import { render, screen } from '@testing-library/react';
import Center from './Center';
import { Box } from '../';

describe('Center', () => {
  it('center the content', () => {
    render(
      <Box borderWidth="1px">
        <Center role="layout">
          <Box role="content" borderWidth="1px">
            Contents
          </Box>
        </Center>
      </Box>
    );
    const Layout = screen.getByRole('layout');
    const Content = screen.getByRole('content');
    expect(Layout).toBeInTheDocument();
    expect(Content).toBeInTheDocument();
    const styles = window.getComputedStyle(Layout);
    expect(styles.marginLeft).toEqual(styles.marginRight);
  });
});
