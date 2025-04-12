export type User = {
    role: "tutor" | "lecturer";
    email: string;
    password: string;
  };
  
  export const DEFAULT_USERS: User[] = [
    { role: "tutor", email: "meowmeow@rmit.com", password: "password123" },
    { role: "lecturer", email: "loverboy@rmit.com", password: "password456" },
  ];

 
  