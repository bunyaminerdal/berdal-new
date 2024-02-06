import berdalImg from "../../public/images/berdal.png";
import berdalChatImg from "../../public/images/berdal-chat.png";
import berdalTodoImg from "../../public/images/berdal-todo.png";
import berdalNewImg from "../../public/images/berdal-new.png";
import ProjectCard from "@/components/project/ProjectCard";

const projectList = [
  {
    title: "PERSONAL WEBSITE",
    description:
      "Next.js(14) Typescript Tailwind.css Shadcn/ui react-icons Prisma Neon.Tech Postgres nextauth resend(mail service) react-hook-form zod sonner",
    img: berdalNewImg,
    githubUrl: "https://github.com/bunyaminerdal/berdal-new",
    visitUrl: "https://www.bunyaminerdal.dev",
  },
  {
    title: "PERSONAL WEBSITE (OLD)",
    description:
      "Next.js(13) Typescript material-ui material-icons Prisma Supabase Postgres nextauth nodemailer notistack react-hook-form Axios",
    img: berdalImg,
    githubUrl: "https://github.com/bunyaminerdal/berdal",
    visitUrl: "https://old.bunyaminerdal.dev",
  },
  {
    title: "REALTIME CHAT APP",
    description:
      "Next.js Typescript Tailwind.css daisyUi Prisma Postgres Supabase(db and realtime websocket) react-icons Axios",
    img: berdalChatImg,
    githubUrl: "https://github.com/bunyaminerdal/berdal-chat",
    visitUrl: "https://chat.bunyaminerdal.dev",
  },
  {
    title: "TODO APP",
    description:
      "Next.js Typescript Tailwind.css Prisma Supabase Postgres react-icons Axios react-hook-form",
    img: berdalTodoImg,
    githubUrl: "https://github.com/bunyaminerdal/berdal-todo-app",
    visitUrl: "https://todo.bunyaminerdal.dev",
  },
];

const ProjectPage = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center gap-3">
      <div className="text-3xl font-bold  flex justify-center items-center mt-5">
        <p>Projects</p>
      </div>
      <div className="border-b w-full my-2"></div>
      {projectList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectPage;
