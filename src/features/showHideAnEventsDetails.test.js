import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user has opened the event list', () => {

    });

    when('the user views the event elements', () => {

    });

    then('each event element should be displayed in a collapsed state', () => {

    });
  });
  test('User can expand an event to see details.', ({ given, when, then }) => {
    given('the user has opened the event list', () => {

    });

    when('the user clicks on the expand button of the event', () => {

    });

    then('the event should expand to show its details', () => {

    });
  });
  test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('the user has opened the event list', () => {

    });

    when('the user clicks on the collapse button of the event', () => {

    });

    then('the event should collapse to hide its details', () => {

    });
  });


});