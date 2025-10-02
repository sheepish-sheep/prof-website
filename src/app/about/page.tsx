import { ArrowLeft, FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skills = {
  Frontend: ["HTML", "CSS", "Tailwind", "Next.js"],
  Backend: ["Python", "Java", "FastAPI", "Supabase"],
  "AI/ML": ["LLMs", "reinforcement learning"],
  Hardware: ["Battlebots"],
  Other: ["Git"],
};

export default function AboutPage() {
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
            <span className="text-foreground">About</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">About</h1>

        <Card className="no-hover-effect">
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I grew up around hardware and kitchens. I like systems that feel
              inevitable, with clear boundaries, few moving parts, and good defaults.
              If it needs a manual, it failed the brief.
            </p>

            <div className="space-y-2 mt-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-muted dither-xs dither-dark">
                <Image
                  src="/assets/Battlebot-Team.png"
                  alt="Battlebot team"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Me (2nd from the left) with my battlebot team :)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-sm font-medium">{category}</h3>
                <p className="text-sm text-muted-foreground">
                  {items.join(", ")}
                </p>
                {category !== "Other" && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" className="justify-start" asChild>
                <a
                  href="/Bensen_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a
                  href="https://github.com/sheepish-sheep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a
                  href="https://www.linkedin.com/in/bensen-wang-a06499265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
