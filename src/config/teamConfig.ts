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
    bio: "Founder of Founders Grove, and my uncle. Cool guy, just had twins. Codes in his sleep.",
    img: "/imgs/DayneJones.jpeg",
    title: "CEO | Senior Developer",
    gitLink: "https://github.com/daynejones",
    linkedIn: "https://www.linkedin.com/in/daynejones/"
  },
  {
    name: "Sam McDonald",
    bio: "The Coolest guy with lots of awesome ideas to build.",
    img: "/imgs/SamMcDonald.jpg",
    title: "Genius | Junior Developer",
    gitLink: "https://github.com/sammcdonald-dev",
    linkedIn: "https://www.linkedin.com/in/sam-mcdonald-42b2761a3/"
  },
  {
    name: "Jordan Rhodes",
    bio: "Senior React Engineer with expertise in JavaScript and Rust development. Full-stack application developer from Tampa, FL.",
    img: "/imgs/jordan.png",
    title: "Senior React Engineer",
    gitLink: "https://github.com/jsrhodes15",
    linkedIn: "https://www.linkedin.com/in/jsrhodes15/"
  }
]; 