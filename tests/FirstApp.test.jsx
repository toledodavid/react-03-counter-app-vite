import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Tests for <FirstApp />', () => {

  test('should match with the snapshot', () => {
    const { container } = render(<FirstApp />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title in an h1 element', () => {
    const title = 'Hi, I am David';
    const {container, getByText} = render(<FirstApp title={title}/>);

    const h1 = container.querySelector('h1');

    expect(getByText(title)).toBeTruthy();
    expect(h1.innerHTML).toContain(title);
  });

});