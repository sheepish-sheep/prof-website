import { ArrowLeft } from "lucide-react";
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

const upcomingProjects = [
  {
    title: "Drawing Assistant",
    description: "Small tool for reference, grids, and proportion checks.",
    status: "planning",
    stack: ["Python", "LLMs", "OpenAI API"],
  },
  {
    title: "Sidequest App",
    description: "Track bite‑sized quests with a playful UI.",
    status: "planning",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Agent Art Gallery",
    description: "Agents that curate and explain generated art.",
    status: "planning",
    stack: ["Python", "LLMs", "FastAPI"],
  },
  {
    title: "YuGiOh Assistant",
    description: "Search + analysis for deck building.",
    status: "planning",
    stack: ["Python", "scraping"],
  },
  {
    title: "AI TABS",
    description: "ML‑guided practice for guitar tabs.",
    status: "planning",
    stack: ["Python", "basic ML"],
  },
  {
    title: "Neural Net Fighting Game",
    description: "RL agents sparring in a tiny arena.",
    status: "planning",
    stack: ["Python", "RL"],
  },
];

export default function UpcomingPage() {
  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
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
            <span className="text-foreground">Upcoming</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">Upcoming</h1>

        <div className="grid gap-6">
          {upcomingProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
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
