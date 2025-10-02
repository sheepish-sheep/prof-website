import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Virus Simulation",
    description: "Agent-based exploration of ultra-fast viral evolution.",
    stack: ["Python", "Pygame", "Matplotlib"],
    link: "https://github.com/sheepish-sheep/Virus-Simulation",
    image: "/assets/Virus Sim.png",
    alt: "Visualization of virus evolution over time",
  },
  {
    title: "Theory Bot",
    description: "A small system for poking at theoretical ideas with LLMs.",
    stack: ["FastAPI", "Python", "Tailwind"],
    link: "https://github.com/sheepish-sheep/Theory-Bot",
    image: "/assets/Theory bot.png",
    alt: "Minimal interface of Theory Bot",
  },
  {
    title: "Roami",
    description: "AI road‑trip assistant that plans routes and vibes.",
    stack: ["LLMs", "Moondream"],
    link: "https://devpost.com/software/roami",
    image: "/assets/Roami.jpg",
    alt: "Roami interface mock",
  },
  {
    title: "Romaji Lyrics Finder",
    description: "Single‑file app that scrapes and verifies romaji lyrics.",
    stack: ["Python", "Web scraping", "OpenAI"],
    link: "https://github.com/sheepish-sheep/Romaji-Lyrics-Finder",
    image: "/assets/Romaji-Lyrics-Finder.png",
    alt: "Popup lyrics tool UI",
  },
  {
    title: "Website",
    description: "This site—rebuilt clean, boring, and fast.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://bensenwang.dev/",
    image: "/assets/Website.png",
    alt: "Portfolio screenshot",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Projects</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted flex-1">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
