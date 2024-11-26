import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";
import { render,within,waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');


defineFeature(feature, test => {
  let AppComponent;
  let EventListDOM;
  let AppDOM;
  let NumberOfEventsComponent;
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('the user has opened the event list', async() => {
      AppComponent = render(<App />);
      
      
    });

    when('the user has not specified the number of events to display', () => {
      
    });

    then(/^the app should show (\d+) events by default$/, async(arg0) => {
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    });
  });
  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('the user has opened the event list', async() => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    });

    when(/^the user specifies a new number of events to display \(e.g., (\d+)\)$/, async(arg0) => {
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />)
      const user = userEvent.setup();
      const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
      await user.type(numberOfEvents, '{backspace}{backspace}10'); 
    });

    then('the app should update the event list to show the specified number of events', () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10'); 
    });
  });

});