import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="block">Alex Olyaiy</span>
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Computer Science student at UBC and co-founder of High Tide Digital. 
                Building modern web experiences with cutting-edge technologies.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="shadow-lg shadow-primary/20">View Projects</Button>
              <Button size="lg" variant="secondary">Get in Touch</Button>
            </div>
          </div>

          {/* Right Content - Gradient Visual */}
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/30 to-secondary p-1">
              <div className="h-full w-full rounded-xl bg-background/90 backdrop-blur-sm" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-primary/20 blur-[12px]" />
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-xl bg-primary/10 blur-[16px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
