import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Tests for <FirstApp />', () => {

  test('should match with the snapshot', () => {
    render(<FirstApp />);
  });

});