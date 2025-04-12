import { useState } from "react";
import { useRouter } from "next/router";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, IconButton, Text, Heading, Image, Button } from '@chakra-ui/react';
import avaImage from "avatar-default-symbolic-icon-479x512-n8sg74wg.png";



export default function Lecturer(){
return(
<Card maxW='md'>
  <CardHeader>
    <Flex>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' />
        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>Tutorer</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
        This can be used to display the skills and other information 
        for the Tutorers. adding this here for the moment to hold its 
        shape. but i will recursively loop each card. 
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost'>
      Select Tutorer
    </Button>
    <Button flex='1' variant='ghost'>
      Set Preference
    </Button>
    <Button flex='1' variant='ghost'>
     Comment
    </Button>
  </CardFooter>
</Card>
);
}



/*import {
    Box, Heading, Input, Select, Table, Thead, Tbody, Tr, Th, Td, Textarea, Button, useToast
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
      </Box>
      <Footer />
    </>
  );
}
*/