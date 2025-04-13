import { render, screen, fireEvent } from "@testing-library/react";
import LecturerPage from "../pages/lecturer";

describe("LecturerPage Component", () => {
  beforeEach(() => {
    localStorage.setItem(
      "tutorApplication",
      JSON.stringify({
        course: "COSC1234",
        role: "Tutor",
        availability: "Part Time",
        skills: "React, Node.js",
        credentials: "MSc Computer Science",
      })
    );
  });

  it("renders lecturer dashboard heading", () => {
    render(<LecturerPage />);
    expect(screen.getByText("Tutor Applications Review")).toBeInTheDocument();
  });

  it("displays the tutor course and role", async () => {
    render(<LecturerPage />);
    expect(await screen.findByText("COSC1234")).toBeInTheDocument();
    expect(screen.getByText("Tutor")).toBeInTheDocument();
  });

  it("allows the lecturer to select and rank an applicant", async () => {
    render(<LecturerPage />);
    const checkbox = await screen.findByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const rankInput = screen.getByPlaceholderText("Rank");
    fireEvent.change(rankInput, { target: { value: "1" } });
    expect(rankInput).toHaveValue("1");
  });

  it("filters applicants based on search input", () => {
    render(<LecturerPage />);
    const searchBox = screen.getByPlaceholderText("Search by course, skill, availability, or qualification");
    fireEvent.change(searchBox, { target: { value: "React" } });
    expect(screen.getByText("React, Node.js")).toBeInTheDocument();
  });

  it("shows stats for most chosen and not selected applicants", async () => {
    render(<LecturerPage />);
    const mostChosen = await screen.findByText("Most Chosen Applicant");
    const notSelected = screen.getByText("Not Selected");
    expect(mostChosen).toBeInTheDocument();
    expect(notSelected).toBeInTheDocument();
  });
});
