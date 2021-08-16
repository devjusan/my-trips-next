import Map from "."
import { render, screen } from "@testing-library/react"

describe("<Map />", () => {
  it("should render without any marker", () => {
    render(<Map />)
    screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole("link", { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })
  it("should render with then marker in correct place", () => {
    const place = {
      id: "1",
      name: "São Vicente",
      slug: "saovicente",
      location: {
        latitude: 0,
        longitude: 0,
      },
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/são vicente/i)).toBeInTheDocument()
  })
})
