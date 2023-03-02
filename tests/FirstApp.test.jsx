import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Tests for <FirstApp />', () => {

  // test('should match with the snapshot', () => {
  //   const { container } = render(<FirstApp />);
  //   expect(container).toMatchSnapshot();
  // });

  test('should show the title in an h1 element', () => {
    const title = 'Hi, I am David';
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

    // const h1 = container.querySelector('h1');

    // expect(getByText(title)).toBeTruthy();
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should show a subtitle sent by props', () => {
    const subTitle = 12;
    const {getByText} = render(<FirstApp subTitle={subTitle}/>);

    expect(getByText(subTitle)).toBeTruthy();
  });

});