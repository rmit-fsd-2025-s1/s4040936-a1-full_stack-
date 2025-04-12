import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Heading,
  useToast,
  Text
} from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const courses = [
  { code: "COSC2758", name: "Full Stack Development" },
  { code: "COSC2300", name: "Data Structures" },
  { code: "COSC3000", name: "Algorithms and Complexity" },
];

export default function TutorPage() {
  const toast = useToast();

  const [formData, setFormData] = useState({
    course: "",
    role: "",
    previousRoles: "",
    availability: "",
    skills: "",
    credentials: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) {
      toast({ title: "Please complete all fields before submitting.", status: "error" });
      return;
    }
    localStorage.setItem("tutorApplication", JSON.stringify(formData));
    toast({ title: "Thank you! Your application has been submitted.", status: "success" });
  };

  return (
    <>
      <Navigation />
      <Box maxW="600px" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading mb={2} size="lg">Apply to Teach</Heading>
        <Text mb={6} color="gray.600">
          Let us know more about your background, skills, and availability so we can match you with the right course and role.
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isRequired>
            <FormLabel>Select a Course</FormLabel>
            <Select name="course" onChange={handleChange} placeholder="Choose your course">
              {courses.map((c) => (
                <option key={c.code} value={c.code}>{`${c.code} - ${c.name}`}</option>
              ))}
            </Select>
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Preferred Role</FormLabel>
            <Select name="role" onChange={handleChange} placeholder="Tutor or Lab Assistant?">
              <option value="Tutor">Tutor</option>
              <option value="Lab Assistant">Lab Assistant</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Previous Experience</FormLabel>
            <Textarea name="previousRoles" onChange={handleChange} placeholder="e.g., Assisted in COSC2345 tutorials" />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Availability</FormLabel>
            <Select name="availability" onChange={handleChange} placeholder="Choose your availability">
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </Select>
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Your Skills</FormLabel>
            <Textarea name="skills" onChange={handleChange} placeholder="e.g., Python, JavaScript, team leadership" />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Academic Qualifications</FormLabel>
            <Input name="credentials" onChange={handleChange} placeholder="e.g., Bachelor of Computer Science" />
          </FormControl>

          <Button colorScheme="blue" type="submit">Submit Application</Button>
        </form>
      </Box>
      <Footer />
    </>
  );
}
