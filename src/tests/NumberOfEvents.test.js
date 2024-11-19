import { render,screen } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

import userEvent from "@testing-library/user-event";


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />)
  })

  test('number of events has the role of textbox', () => {
    const input = screen.queryByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('ensures the default value of textbox is 32', () => {
    expect(screen.getByRole('textbox')).toHaveValue('32');
  });

  test('textbox value changes according to what user types', async () => {
    const numberOfEvents = screen.getByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');

    NumberOfEventsComponent.rerender(<NumberOfEvents />);
    expect(numberOfEvents).toHaveValue('10');
  })
});