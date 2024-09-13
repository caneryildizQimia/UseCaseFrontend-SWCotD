import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterInfo from "../characterInfo";

// Mock the InfoItem component
jest.mock("../infoItem", () => {
  return function MockInfoItem({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) {
    return (
      <li data-testid={`info-item-${label.toLowerCase().replace(" ", "-")}`}>
        {label}: {value}
      </li>
    );
  };
});

describe("CharacterInfo", () => {
  const mockCharacter = {
    height: "172",
    mass: "77",
    hair_color: "blond",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  };

  // Render the component before each test
  beforeEach(() => {
    render(<CharacterInfo character={mockCharacter} />);
  });

  it("renders the Personal Info title", () => {
    expect(screen.getByText("Personal Info")).toBeInTheDocument();
  });

  it("renders all character information correctly", () => {
    const expectedInfo = [
      { label: "Height", value: "172 cm" },
      { label: "Mass", value: "77 kg" },
      { label: "Hair Color", value: "blond" },
      { label: "Eye Color", value: "blue" },
      { label: "Birth Year", value: "19BBY" },
      { label: "Gender", value: "male" },
    ];

    expectedInfo.forEach(({ label, value }) => {
      expect(
        screen.getByTestId(`info-item-${label.toLowerCase().replace(" ", "-")}`)
      ).toHaveTextContent(`${label}: ${value}`);
    });
  });

  it("capitalizes all info items", () => {
    const infoList = screen.getByRole("list");
    expect(infoList).toHaveClass("capitalize");
  });

  it("applies correct styling to the title", () => {
    const title = screen.getByText("Personal Info");
    expect(title).toHaveClass("mb-2", "text-3xl", "text-yellow", "uppercase");
  });

  it("renders InfoItem components for each character attribute", () => {
    expect(screen.getAllByTestId(/^info-item-/)).toHaveLength(6);
  });
});
