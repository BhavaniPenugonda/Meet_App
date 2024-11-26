Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default
  Given the user has opened the event list
  When the user views the event elements
  Then each event element should be displayed in a collapsed state

 Scenario: User can expand an event to see details.

  Given the user has opened the event list
  When the user clicks on the expand button of the event
  Then the event should expand to show its details

 Scenario: User can collapse an event to hide details

  Given the user has opened the event list
  When the user clicks on the collapse button of the event
  Then the event should collapse to hide its details
