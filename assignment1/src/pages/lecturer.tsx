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
