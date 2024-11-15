import {render ,within,screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';



describe('<App /> component', () => {

  beforeEach(() => {
    render(<App />);
  })
  test('renders list of events', () => {
     
    expect(screen.getByTestId('#event-list')).toBeInTheDocument();
  });
  test('render CitySearch', () => {
    
    expect(screen.getByTestId('#city-search')).toBeInTheDocument();
    });
    test('render number of events', () => {
      expect(screen.getByTestId('#numberOfEvents')).toBeInTheDocument();
      });
});

test('updates the number of events displayed when the user changes the number of events input', async () => {
  const user = userEvent.setup();
  render(<App />);
  

  const NumberOfEventsDOM =screen.getByTestId ('#number-of-events');
  const NumberOfEventsInput = within(NumberOfEventsDOM).queryByTestId('numberOfEventsInput');

  await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

  const EventListDOM = screen.getByTestId('#event-list');
  const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
  expect(allRenderedEventItems.length).toBe(10);
});
