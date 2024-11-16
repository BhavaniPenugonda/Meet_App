import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { render,screen } from '@testing-library/react';
import mockData from "../mock-data";
import { getEvents } from "../api";



describe('<Event /> component', () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
      EventComponent = render(<Event event={event}/>);
  })

  
    test('render event title', async () => {   
      const allEvents = await getEvents();
      EventComponent.rerender(<Event event={allEvents[0]} />);
        expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
    }); 
  
    test('render event location', async () => {   
      const allEvents = await getEvents();
      EventComponent.rerender(<Event event={allEvents[0]} />);
      expect(screen.getByText(allEvents[0].location)).toBeInTheDocument(); 
    });

test('renders event start time', async() => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(screen.getByText(allEvents[0]).created).toBeInTheDocument();
});



// Show Details button
test('render event details button', () => {
    
    const detailButton = EventComponent.queryByText('Show Details');
    expect(detailButton).toBeInTheDocument();
});

// Scenario 1 
test("event's details are hidden by default", () => {
    const eventDetails = EventComponent.container.querySelector('.details');
    expect(eventDetails).not.toBeInTheDocument();
});

// Scenario 2
test('show details after user clicks on button "Show Details"', async () => {
    const user = userEvent.setup();
    
    const showDetailButton = screen.queryByText('Show Details');
    await user.click(showDetailButton);

    const eventDetails = EventComponent.container.querySelector('.eventDetails');
    expect(eventDetails).toBeInTheDocument();
});

// Scenario 3
test('hide details after use clicks on button "Hide details', async () => {
    const user = userEvent.setup();
    
    const showDetailButton = screen.queryByText('Show Details');
    await user.click(showDetailButton);
    
    const hideDetailButton = screen.queryByText('Hide Details');
    await user.click(hideDetailButton);

    
    const eventDetails = screen.queryByText('.eventDetails');
    expect(eventDetails).not.toBeInTheDocument();
});
});
  