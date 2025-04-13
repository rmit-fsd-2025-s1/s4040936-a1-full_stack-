

import {
  Box, Heading, Input, Select, Table, Thead, Tbody, Tr, Th, Td, Textarea, Button, useToast, SimpleGrid, Stat, StatLabel, StatNumber
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LecturerPage() {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [comments, setComments] = useState<any>({});
  const toast = useToast();

  useEffect(() => {
    const data = localStorage.getItem("tutorApplication");
    if (data) {
      setApplicants([JSON.parse(data)]);
    }
  }, []);

  const handleSelect = (index: number) => {
    const updated = [...applicants];
    updated[index].selected = !updated[index].selected;
    setApplicants(updated);
  };

  const handleRankChange = (index: number, value: string) => {
    const updated = [...applicants];
    updated[index].rank = value;
    setApplicants(updated);
  };

  const handleCommentChange = (index: number, value: string) => {
    setComments({ ...comments, [index]: value });
  };

  const filtered = applicants.filter((a) => {
    const term = searchTerm.toLowerCase();
    return (
      a.course.toLowerCase().includes(term) ||
      a.skills.toLowerCase().includes(term) ||
      a.credentials.toLowerCase().includes(term) ||
      a.availability.toLowerCase().includes(term)
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    if (!sortField) return 0;
    return a[sortField].localeCompare(b[sortField]);
  });

  const handleSave = () => {
    toast({ title: "Selections and rankings saved.", status: "success" });
  };

  const selectedApplicants = applicants.filter((a) => a.selected);

  const mostChosen = selectedApplicants.length ? selectedApplicants[0] : null;
  const leastChosen = selectedApplicants.length ? selectedApplicants[selectedApplicants.length - 1] : null;
  const notSelected = applicants.filter((a) => !a.selected);

  return (
    <>
      <Navigation />
      <Box maxW="90%" mx="auto" mt={8}>
        <Heading mb={6}>Tutor Applications Review</Heading>

        <Input
          placeholder="Search by course, skill, availability, or qualification"
          mb={4}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select placeholder="Sort by" mb={6} onChange={(e) => setSortField(e.target.value)}>
          <option value="course">Course</option>
          <option value="availability">Availability</option>
        </Select>

        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Course</Th>
              <Th>Role</Th>
              <Th>Availability</Th>
              <Th>Skills</Th>
              <Th>Qualifications</Th>
              <Th>Select</Th>
              <Th>Rank</Th>
              <Th>Comments</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sorted.map((app, index) => (
              <Tr key={index}>
                <Td>{app.course}</Td>
                <Td>{app.role}</Td>
                <Td>{app.availability}</Td>
                <Td>{app.skills}</Td>
                <Td>{app.credentials}</Td>
                <Td>
                  <input
                    type="checkbox"
                    checked={app.selected || false}
                    onChange={() => handleSelect(index)}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Rank"
                    size="sm"
                    value={app.rank || ""}
                    onChange={(e) => handleRankChange(index, e.target.value)}
                  />
                </Td>
                <Td>
                  <Textarea
                    placeholder="Add comment"
                    size="sm"
                    value={comments[index] || ""}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Button mt={6} colorScheme="blue" onClick={handleSave}>Save Selections</Button>

        <Heading size="md" mt={10} mb={4}>Summary Insights</Heading>
        <SimpleGrid columns={[1, 3]} spacing={6}>
          <Stat>
            <StatLabel>Most Chosen Applicant</StatLabel>
            <StatNumber>{mostChosen ? mostChosen.course : "N/A"}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Least Chosen Applicant</StatLabel>
            <StatNumber>{leastChosen ? leastChosen.course : "N/A"}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Not Selected</StatLabel>
            <StatNumber>{notSelected.length}</StatNumber>
          </Stat>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
