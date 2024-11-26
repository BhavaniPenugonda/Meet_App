Feature: Specify Number of Events
 Scenario: When user hasn’t specified a number, 32 events are shown by default.

  Given the user has opened the event list
  When the user has not specified the number of events to display
  Then the app should show 32 events by default


 Scenario: User can change the number of events displayed.

  Given the user has opened the event list
  When the user specifies a new number of events to display (e.g., 10)
  Then the app should update the event list to show the specified number of events
 
