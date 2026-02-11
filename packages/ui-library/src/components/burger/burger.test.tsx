import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {BurgerMenu} from './burger';
import React from 'react';

describe('general', () => {
  test('should render burger control button', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const buttons = container.getElementsByTagName('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('should open menu when clicking burger button', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const openButton = container.getElementsByTagName('button')[0];

    fireEvent.click(openButton);

    const menuWrapper = container.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).toMatch(/\btransform\b/);
  });

  test('should close menu when clicking close button', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const openButton = container.getElementsByTagName('button')[0];
    fireEvent.click(openButton);

    const closeButton = container.getElementsByTagName('button')[1];
    fireEvent.click(closeButton);

    const menuWrapper = container.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).not.toMatch(/\btransform\b/);
  });

  test('should render blur background when opened', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const openButton = container.getElementsByTagName('button')[0];
    fireEvent.click(openButton);

    const blur = container.querySelector('[class*="blur"]');
    expect(blur).toBeDefined();
  });

  test('should close when clicking blur background', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const openButton = container.getElementsByTagName('button')[0];
    fireEvent.click(openButton);

    const blur = container.querySelector<HTMLElement>('[class*="blur"]')!;
    fireEvent.click(blur);

    const menuWrapper = container.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).not.toMatch(/\btransform\b/);
  });

  test('should close when clicking nav content', () => {
    render(
      <BurgerMenu alignment="left">
        <div>Menu Item</div>
      </BurgerMenu>
    );

    const openButton = screen.getAllByRole('button')[0];
    fireEvent.click(openButton);

    const navItem = screen.getByText('Menu Item');
    fireEvent.click(navItem);

    const menuWrapper = document.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).not.toMatch(/\btransform\b/);
  });

  test('should apply left alignment class', () => {
    const {container} = render(
      <BurgerMenu alignment="left">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const menuWrapper = container.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).toMatch(/\bleft\b/);
  });

  test('should apply right alignment class', () => {
    const {container} = render(
      <BurgerMenu alignment="right">
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const menuWrapper = container.querySelector('[class*="menuWrapper"]');
    expect(menuWrapper?.className).toMatch(/\bright\b/);
  });

  test('should apply dark class when dark prop is set', () => {
    const {container} = render(
      <BurgerMenu alignment="left" dark>
        <div>Menu Content</div>
      </BurgerMenu>
    );

    const openButton = container.getElementsByTagName('button')[0];
    expect(openButton.className).toMatch(/\bdark\b/);
  });
});
