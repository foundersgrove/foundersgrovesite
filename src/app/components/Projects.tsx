"use client";
import ProjectCard from "./ProjectCard";

// Project data
const projectsData = [
  {
    title: "Civic Media: A State-Wide Radio Network",
    description: "Civic Media's news covers the state of Wisconsin. As the technology partner for Civic Media, Founders Grove designed a custom media platform that powers their 20+ radio stations.",
    imageSrc: "/CivicMedia.pdf#toolbar=0&navpanes=0",
    imageTitle: "civic media",
    features: [
      { 
        text: "Used NextJS, Wordpress, and Terraform to deploy 20+ cutting-edge sites from the same codebase."
      },
      { 
        text: "Developed a custom radio player utilizing Web Audio API and React state management, enabling seamless streaming across broadcast, web, and mobile platforms."
      },
      { 
        text: "Built a multi-terabyte audio library and content management system on a budget."
      }
    ]
  },
  {
    title: "Bengine: The Doordash for Mechanics",
    description: "Bengine connects mechanics with autoparts stores and drivers to deliver parts in record time. Founders Grove developed a custom ordering system, payment processing, and a user-friendly interface.",
    imageSrc: "/Bengine.pdf#toolbar=0&navpanes=0",
    imageTitle: "Bengine",
    features: [
      { 
        text: "Went from ideas to an entire product in a couple months."
      },
      { 
        text: "Integrated a custom API to coordinate vehicle filtered parts search."
      },
      { 
        text: "Integrated a delivery service to coordinate parts delivery."
      }
    ]
  },
  {
    title: "Treehouse Schoolhouse: Homeschool 101",
    description: "Treehouse Schoolhouse had a great ecommerce presence but their Shopify blog was not performing well. Founders Grove redesigned the blog to be more engaging and user-friendly, while adding functionality to drive traffic to the shop.",
    imageSrc: "/Homeschool.pdf#toolbar=0&navpanes=0",
    imageTitle: "Treehouse Schoolhouse Blog",
    features: [
      { 
        text: "Seamlessly integrated an existing shopify ecommerce site with a headless wordpress blog."
      },
      { 
        text: "Leveraged NextJS and Wordpress to create custom content experiences."
      },
      { 
        text: "Built a custom quiz solution to engage the audience and drive sales."
      }
    ]
  }
];

export default function Projects() {
  return (
    <div className="space-y-24">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          imageTitle={project.imageTitle}
          features={project.features}
        />
      ))}
    </div>
  );
} 