import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Tests for <FirstApp2 />', () => {

  const title = 'Hi, I am David';
  const subTitle = 'I am a subtitle';

  test('should match with the snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the message "Hi, I am David"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title in an h1 element', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('should show the subtitle sent by props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getByText(subTitle).innerHTML).toContain(subTitle);
  });

});