import {render ,within,screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';



describe('<App /> component', () => {
  let AppDOM; 
  beforeEach(() => {
    AppDOM = render(<App/>).container.firstChild;
  })
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
    
  test('render CitySearch', () => {
    
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
    test('render number of events', () => {
      expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
      });
});

