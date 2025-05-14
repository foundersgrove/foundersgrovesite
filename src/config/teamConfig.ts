export interface TeamMember {
  name: string;
  bio: string;
  title: string;
  img: string;
  gitLink: string;
  linkedIn: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dayne Jones",
    bio: "Founder of Founders Grove, just had twins. Codes in his sleep. Sacramento, CA.",
    img: "/imgs/DayneJones.jpeg",
    title: "Founder | Architect | Product Designer",
    gitLink: "https://github.com/daynejones",
    linkedIn: "https://www.linkedin.com/in/daynejones/"
  },
  {
    name: "Sam McDonald",
    bio: "The guy who has more ideas to build than time to build them. Charlotte, NC.",
    img: "/imgs/SamMcDonald.jpg",
    title: "Apprentice | Web Developer | Designer",
    gitLink: "https://github.com/sammcdonald-dev",
    linkedIn: "https://www.linkedin.com/in/sam-mcdonald-42b2761a3/"
  },
  {
    name: "Jordan Rhodes",
    bio: "Full-stack application developer and entrepreneur. Tampa, FL.",
    img: "/imgs/jordan.png",
    title: "Senior Engineer | Entrepreneur",
    gitLink: "https://github.com/jsrhodes15",
    linkedIn: "https://www.linkedin.com/in/jsrhodes15/"
  }
]; 