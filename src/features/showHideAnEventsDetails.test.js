import { loadFeature, defineFeature } from 'jest-cucumber';
import { render ,within,waitFor} from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {
  let AppComponent;
  let AppDOM; 
  let EventListDOM;
  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the user has opened the event list', () => {
      AppComponent = render(<App />);
      
  });

    when('the user views the event elements', async() => {
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBeGreaterThan(0);
    });
    });

    then('each event element should be displayed in a collapsed state', () => {
      AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    given('the user has opened the event list', async() => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    });

    when('the user clicks on the expand button of the event', async() => {
      const user = userEvent.setup();
      const showDetails = AppComponent.queryByText('Show Details');
      await user.click(showDetails);
    });

    then('the event should expand to show its details', () => {
      AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).toBeInTheDocument();
      
    });
  });
  test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('the user has opened the event list', async() => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });

    });

    when('the user clicks on the collapse button of the event', () => {
      const user = userEvent.setup();
      const hideDetails = AppComponent.queryByText('Hide Details');  
      user.click(hideDetails); 
    });

    then('the event should collapse to hide its details', () => {
      AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });


});