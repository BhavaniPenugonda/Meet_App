
# Meet APP

## Overview
Events PWA is a serverless Progressive Web Application built with React that allows users to view and manage upcoming events from their Google Calendar. The application is designed to work offline, providing a smooth user experience even in slow network conditions. 

## Key Features
- **Filter Events by City**: Users can filter events based on their location.
- **Show/Hide Event Details**: Users can toggle the visibility of event details.
- **Specify Number of Events**: Users can choose how many events to display.
- **Use the App When Offline**: The app is fully functional offline or in slow network conditions.
- **Add an App Shortcut to the Home Screen**: Users can install the app on their desktop and add it to their mobile home screen.
- **Data Visualization**: Charts display event data visually for better insights.
- **Alert System**: An object-oriented approach is implemented to inform users of important information.

## Technical Requirements
- Built with **React**.
- Implemented using **Test-Driven Development (TDD)**.
- Uses **Google Calendar API** and OAuth2 for authentication.
- Utilizes **serverless functions** (AWS Lambda preferred) for authorization.
- The application is **responsive** and works on all screen sizes (from 320px to 1920px).
- Passes **Lighthouse’s PWA checklist**.
- Works offline with the help of a **service worker**.
- Covered by tests with a coverage rate of **>= 90%**.



 # Feature 1: Filter Events By City

USER STORY:

As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

TEST SCENARIOS:

* Scenario 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

* Scenario 2
User should see a list of suggestions when they search for a city.

Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

* Scenario 3
User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


# Feature 2: Show/Hide Event Details
USER STORY:

As a user,
I should be able to show or hide the details of an event,
So that I can quickly view or hide additional information about an event without leaving the main events list.

TEST SCENARIOS:

 * Scenario 1: An event element is collapsed by default

 Given the user has opened the event list
 When the user views the event elements
 Then each event element should be displayed in a collapsed state


 * Scenario 2: User can expand an event to see details.

 Given the user has opened the event list
 When the user clicks on the expand button of the event
 Then the event should expand to show its details

* Scenario 3: User can collapse an event to hide details

Given the user has opened the event list
When the user clicks on the collapse button of the event
Then the event should collapse to hide its details


# Feature 3: Specify Number of Events

USER STORY:

As a user,
I should be able to specify the number of events I want to see on the page,
So that I can control the amount of information displayed at once and navigate through events more easily.

TEST SCENARIOS:

 
 * Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

 Given the user has opened the event list
 When the user has not specified the number of events to display
 Then the app should show 32 events by default


 * Scenario 2: User can change the number of events displayed.

 Given the user has opened the event list
 When the user specifies a new number of events to display (e.g., 10)
 Then the app should update the event list to show the specified number of events
 

# Feature 4: Use the App When Offline

USER STORY:

As a user,
I should be able to use the app when offline,
So that I can view previously loaded events and navigate the app even without an internet connection.

TEST SCENARIOS:


* Scenario 1: Show cached data when there’s no internet connection.

Given the user has previously viewed events
When the user opens the app
Then the app should display the cached events

* Scenario 2: Show error when user changes search settings (city, number of events).

Given the user is offline
When the user changes the search settings (e.g., city or number of events)
Then the app should show an error message indicating that changes cannot be made without an internet connection



# Feature 5: Add an App Shortcut to the Home Screen

USER STORY:

As a user,
I should be able to add a shortcut for the app to my device’s home screen,
So that I can easily access the app directly from my home screen without opening a browser.

TEST SCENARIOS:

* Scenario 1: User can install the meet app as a shortcut on their device home screen.

Given the user has opened the app on their device
When the user clicks on the "Add to Home Screen" option
Then the app should prompt the user to confirm the installation

# Feature 6: Display Charts Visualizing Event Details

USER STORY :

As a user,
I should be able to see charts that visually represent event details,
So that I can quickly understand event statistics, trends, and other key information at a glance.

TEST SCENARIOS:
 
Scenario 1: Show a chart with the number of upcoming events in each city.

Given the user has opened the events dashboard
When the data for upcoming events is available
Then the app should display a chart visualizing the number of upcoming events for each city
