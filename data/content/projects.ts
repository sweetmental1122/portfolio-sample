import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Castalk",
    desc: "Castalk is a real-time video chat app that uses cutting-edge AI technology.",
    img: "/static/projects/castalk.png",
    link: "https://www.castalk.com/",
    tags: ["PHP", "TailwindCSS", "Mysql", "Nginx"],
  },
  {
    id: 1,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/buildfaster.png",
    link: "https://buildfaster-io.vercel.app/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 2,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "Learn.TheYEI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/yei-learn.png",
    link: "https://learn.theyei.org/",
    // github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 8,
    title: "TaskDrive",
    desc: "Hire top global talent aligned with your company mission, vision, and culture and do their job out of Love not Fear.",
    img: "/static/projects/taskdrive.png",
    link: "https://taskdrive.com/",
    tags: ["Wordpress", "jQuery", "Mysql"],
  },
  {
    id: 9,
    title: "Infano",
    desc: "Infano: Empowering Women's Health.",
    img: "/static/projects/infano.png",
    link: "https://infano.care/",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Nginx"],
  },
  {
    id: 10,
    title: "Street Dog BMX",
    desc: "Fans of Tony Hawk’s Pro Skater and Dave Mirra BMX will be right at home!",
    img: "/static/projects/streetdogbmx.png",
    link: "https://streetdogbmx.com/",
    tags: ["Youtube", "jQuery", "Bootstrap", "Github Pages"],
  },
  
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
