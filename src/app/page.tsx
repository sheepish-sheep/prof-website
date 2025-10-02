import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <AnimatedBackground />

      <main className="relative z-10 max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">Bensen Wang</h1>
          <p className="text-xl text-muted-foreground">
            Systems engineer. I build calm software, ML experiments, and the
            occasional robot.
          </p>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/upcoming">Upcoming</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="/Bensen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/sheepish-sheep"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
