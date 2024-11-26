import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');


defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('the user has opened the event list', () => {

    });

    when('the user has not specified the number of events to display', () => {

    });

    then(/^the app should show (\d+) events by default$/, (arg0) => {

    });
  });
  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('the user has opened the event list', () => {

    });

    when(/^the user specifies a new number of events to display \(e.g., (\d+)\)$/, (arg0) => {

    });

    then('the app should update the event list to show the specified number of events', () => {

    });
  });

});