import { render ,within} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';



describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })
  test('renders list of events', () => {
     
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
  test('render CitySearch', () => {
    
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
    test('render number of events', () => {
      expect(AppDOM.querySelector('#numberOfEvents')).toBeInTheDocument();
      });
});

test('updates the number of events displayed when the user changes the number of events input', async () => {
  const user = userEvent.setup();
  const AppComponent = render(<App />);
  const AppDOM = AppComponent.container.firstChild;

  const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
  const NumberOfEventsInput = within(NumberOfEventsDOM).queryByTestId('numberOfEventsInput');

  await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

  const EventListDOM = AppDOM.querySelector('#event-list');
  const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
  expect(allRenderedEventItems.length).toBe(10);
});
