import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import {
  Database,
  Grid3x3,
  Wand2,
  Image,
  Palette,
  Zap,
  Heart,
  FileText,
  Sparkles,
  Star,
  ArrowRight,
  Mail,
  Copy,
} from "lucide-react";
import { FigmaIcon } from "./components/FigmaIcon";
import generateVariationsImg from "figma:asset/94537531cec651458800327c1f1d6d70a634ffe1.png";
import googleSheetsImg from "figma:asset/ddac80a3aaa3110c92bd9cc5583e655771995465.png";
import uploadFileImg from "figma:asset/9dc22e55e12cbbf93b568177db156b3afb1a355d.png";

export default function App() {
  const [showSupportDialog, setShowSupportDialog] = useState(false);

  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description:
        "Seamlessly connect your spreadsheets and databases to automatically populate your designs with real data.",
    },
    {
      icon: Grid3x3,
      title: "Grid Automation",
      description:
        "Generate dynamic grids and layouts that automatically adjust based on your data structure and content.",
    },
    {
      icon: Wand2,
      title: "Smart Templates",
      description:
        "Create intelligent design templates that adapt to different data types and automatically format content.",
    },
    {
      icon: Image,
      title: "Media Sync",
      description:
        "Automatically sync images and media assets from your data sources directly into your Figma designs.",
    },
    {
      icon: Palette,
      title: "Style Mapping",
      description:
        "Map data values to design properties like colors, sizes, and styles for dynamic visual representations.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Keep your designs synchronized with live data sources for always up-to-date prototypes and mockups.",
    },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 lg:py-40 mb-4 sm:mb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="relative">
                {/* Background decorative element */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 gradient-purple rounded-full opacity-10 blur-3xl"></div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-black via-gray-800 to-primary bg-clip-text text-transparent">
                    SheetSync
                  </span>
                  <br />
                  <span className="text-primary font-black">For DeSo</span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Effortlessly automate your designs with data
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Connect spreadsheets, databases, and live data sources to create dynamic, data-driven Figma designs that update automatically.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
                  <a
                    href="https://www.figma.com/community/plugin/1501815488419142087/sheetsync-for-deso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-2xl shadow-purple transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <FigmaIcon className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="hidden sm:inline">Get the Plugin on Figma Community</span>
                      <span className="sm:hidden">Get Plugin</span>
                    </Button>
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/18kpd4py9bJnB5RY3b2lwDDsoZL-3YLo9?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      <FileText className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">View Documentation</span>
                      <span className="sm:hidden">Documentation</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Plugin Screenshots */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Mobile: Stack images vertically */}
                <div className="block lg:hidden space-y-6">
                  <img
                    src={generateVariationsImg}
                    alt="Generate Variations - SheetSync Plugin Interface"
                    className="w-full rounded-2xl shadow-2xl shadow-primary/20 border border-border/20"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src={googleSheetsImg}
                      alt="Google Sheets Integration"
                      className="w-full rounded-xl shadow-lg shadow-primary/10 border border-border/20"
                    />
                    <img
                      src={uploadFileImg}
                      alt="Upload Local File (CSV/XLSX)"
                      className="w-full rounded-xl shadow-lg shadow-primary/10 border border-border/20"
                    />
                  </div>
                </div>

                {/* Desktop: Layered positioning */}
                <div className="hidden lg:block">
                  {/* Main center screenshot - Generate Variations */}
                  <div className="relative z-10 mb-12">
                    <img
                      src={generateVariationsImg}
                      alt="Generate Variations - SheetSync Plugin Interface"
                      className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-primary/20 border border-border/20 transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Top right - Google Sheets Integration */}
                  <div className="absolute -top-8 -right-8 lg:-right-12 w-80 z-20">
                    <img
                      src={googleSheetsImg}
                      alt="Google Sheets Integration"
                      className="w-full rounded-xl shadow-lg shadow-primary/10 border border-border/20 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Bottom left - File Upload */}
                  <div className="absolute -bottom-16 -left-8 lg:-left-12 w-72 z-20">
                    <img
                      src={uploadFileImg}
                      alt="Upload Local File (CSV/XLSX)"
                      className="w-full rounded-xl shadow-lg shadow-primary/10 border border-border/20 transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Enhanced floating elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 gradient-purple rounded-3xl opacity-15 blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 gradient-purple rounded-full opacity-10 blur-2xl"></div>
                  <div className="absolute top-1/3 -left-4 w-24 h-24 bg-primary/20 rounded-2xl opacity-30 blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-20">
            <div className="relative">
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
                Powerful Features for Modern Designers
              </h2>

              {/* Subtle accent line */}
              <div className="mx-auto w-16 h-1 bg-primary rounded-full mb-4 sm:mb-6"></div>
            </div>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
              Everything you need to create data-driven designs that adapt and scale with your content.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="group h-full rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple/10"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-black text-black">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Clean Premium Design */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative group">
            {/* Clean purple background */}
            <div className="bg-primary rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

              <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 text-center">
                {/* Animated icon */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl mb-4 sm:mb-6 group-hover:bg-white/15 transition-colors duration-300">
                    <Sparkles
                      className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-pulse"
                      style={{
                        animation: "sparkle 3s ease-in-out infinite",
                      }}
                    />
                  </div>
                </div>

                {/* Clean typography */}
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Ready to Transform Your Design Workflow?
                </h2>

                <p className="mb-8 sm:mb-12 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
                  Join thousands of designers creating efficient, data-driven designs.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <a
                    href="https://www.figma.com/community/plugin/1501815488419142087/sheetsync-for-deso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto max-w-sm sm:max-w-none"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white hover:bg-white/95 text-primary px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <FigmaIcon className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="hidden sm:inline">Install Figma Plugin Now</span>
                      <span className="sm:hidden">Install Plugin</span>
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </a>
                </div>

                {/* Trust indicator */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white/70">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current text-yellow-300"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    Trusted by 1000+ designers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 sm:px-6 py-8 sm:py-12 mt-8 sm:mt-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  SheetSync
                </span>
                <span className="text-xs sm:text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  For DeSo
                </span>
              </div>
              <nav className="flex gap-4 sm:gap-6 text-sm">
                <a
                  href="https://drive.google.com/drive/folders/18kpd4py9bJnB5RY3b2lwDDsoZL-3YLo9?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-normal"
                >
                  Documentation
                </a>
                <button
                  type="button"
                  onClick={() => setShowSupportDialog(true)}
                  className="text-muted-foreground hover:text-primary transition-colors font-normal bg-transparent border-0 p-0 cursor-pointer"
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    fontSize: "inherit",
                    color: "inherit",
                  }}
                >
                  Support
                </button>
              </nav>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                Made with{" "}
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />{" "}
                by Bimal
              </div>
              <div className="hidden sm:block">•</div>
              <div>© 2025 SheetSync. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Support Dialog */}
      <Dialog open={showSupportDialog} onOpenChange={setShowSupportDialog}>
        <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Mail className="h-5 w-5 text-primary" />
              Get in Touch with Bimal
            </DialogTitle>
            <DialogDescription className="text-left space-y-4 pt-4">
              <p className="text-sm sm:text-base">
                Hey! 👋 I'm Bimal, the designer who created SheetSync. As a
                fellow designer, I understand the challenges of working with
                data in Figma, which is exactly why I built this plugin.
              </p>

              <div className="bg-muted rounded-lg p-3 sm:p-4 space-y-3">
                <p className="text-xs sm:text-sm">
                  <strong>Reach out to me directly:</strong>
                </p>
                <div className="flex items-center gap-2 bg-background rounded-md p-2 sm:p-3 border">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                  <span className="flex-1 font-mono text-xs sm:text-sm break-all">
                    bimal.works@gmail.com
                  </span>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard("bimal.works@gmail.com")}
                    className="h-6 px-2 sm:h-8 sm:px-3 flex-shrink-0"
                    aria-label="Copy email address to clipboard"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Whether you've found a bug, have ideas for new features, or just
                want to share how you're using SheetSync in your design
                workflow, I'd love to hear from you. I personally read and
                respond to every email!
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}