
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { getEvents } from "../api";
import mockData from "../mock-data";

const event = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("render event title", async () => {
    expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("render event location", async () => {
    expect(screen.getByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const eventTime = EventComponent.queryByText(event.created);
    expect(eventTime).toBeInTheDocument();
});

  // Show Details button
  test('render event details button', () => {
    const detailButton = EventComponent.queryByText('Show details');
    expect(detailButton).toBeInTheDocument();
});

  // Scenario 1
  test("event's details are hidden by default", () => {
    const eventDetails = EventComponent.container.querySelector(".details");
    expect(eventDetails).not.toBeInTheDocument();
  });

  // Scenario 2
  test('show details after user clicks on button "Show Details"', async () => {
    const user = userEvent.setup();
    await 
user.click
(EventComponent.queryByText("Show details"));

    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Show details")).not.toBeInTheDocument();
  });

  // Scenario 3
  test('hide details after use clicks on button "Hide details', async () => {
    const user = userEvent.setup();

    const showDetailButton = screen.queryByText("Show Details");
    await 
user.click
(showDetailButton);

    const hideDetailButton = screen.queryByText("Hide Details");
    await 
user.click
(hideDetailButton);

    const eventDetails = screen.queryByText(".eventDetails");
    expect(eventDetails).not.toBeInTheDocument();
  });
}); 

