export interface User {
    email: string;
    password: string;
    role: "tutor" | "lecturer";
  }
  
  export const DEFAULT_USERS: User[] = [
    {
      email: "abc@gmail.com",
      password: "theAus123",
      role: "tutor"
    },
    {
      email: "bcd@gmail.com",
      password: "theNSW123",
      role: "lecturer"
    }
  ];