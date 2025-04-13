import { render, screen, fireEvent } from "@testing-library/react";
import TutorPage from "./tutor";

describe("TutorPage Component", () => {
  it("renders the tutor application form", () => {
    render(<TutorPage />);
    expect(screen.getByText("Apply to Teach")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Choose your course")).toBeInTheDocument();
  });

  it("validates required fields on form submission", () => {
    render(<TutorPage />);
    fireEvent.click(screen.getByText("Submit Application"));
    expect(screen.getByText("Please complete all fields before submitting.")).toBeInTheDocument();
  });

  it("updates state on input changes", () => {
    render(<TutorPage />);
    const skillsInput = screen.getByPlaceholderText("e.g., Python, JavaScript, team leadership");
    fireEvent.change(skillsInput, { target: { value: "JavaScript" } });
    expect(skillsInput).toHaveValue("JavaScript");
  });

  it("saves data to localStorage on valid submission", () => {
    render(<TutorPage />);

    fireEvent.change(screen.getByPlaceholderText("Choose your course"), {
      target: { value: "COSC1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("Tutor or Lab Assistant?"), {
      target: { value: "Tutor" },
    });
    fireEvent.change(screen.getByPlaceholderText("Choose your availability"), {
      target: { value: "Part Time" },
    });
    fireEvent.change(screen.getByPlaceholderText("e.g., Python, JavaScript, team leadership"), {
      target: { value: "React" },
    });
    fireEvent.change(screen.getByPlaceholderText("e.g., Bachelor of Computer Science"), {
      target: { value: "BSc Computer Science" },
    });

    fireEvent.click(screen.getByText("Submit Application"));

    const saved = localStorage.getItem("tutorApplication");
    expect(saved).not.toBeNull();
  });

  it("displays success toast on successful submission", () => {
    render(<TutorPage />);

    fireEvent.change(screen.getByPlaceholderText("Choose your course"), {
      target: { value: "COSC1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("Tutor or Lab Assistant?"), {
      target: { value: "Tutor" },
    });
    fireEvent.change(screen.getByPlaceholderText("Choose your availability"), {
      target: { value: "Part Time" },
    });
    fireEvent.change(screen.getByPlaceholderText("e.g., Python, JavaScript, team leadership"), {
      target: { value: "React" },
    });
    fireEvent.change(screen.getByPlaceholderText("e.g., Bachelor of Computer Science"), {
      target: { value: "BSc Computer Science" },
    });

    fireEvent.click(screen.getByText("Submit Application"));
    expect(screen.getByText("Thank you! Your application has been submitted.")).toBeInTheDocument();
  });
});