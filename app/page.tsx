import { Boxes } from "@/components/ui/background-boxes";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { heroContent } from "@/constants/heroContent";

export default function Home() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20 max-w-2xl text-center">
        <h1
          className={cn(
            "md:text-5xl text-3xl text-white font-semibold leading-snug"
          )}
        >
          {heroContent.heading}
        </h1>
        <p className="mt-4 text-neutral-300 text-lg">{heroContent.subtext}</p>
        <div className="mt-6">
          <GlowButton label={heroContent.buttonLabel} />
        </div>
      </div>

      <footer className="absolute bottom-4 w-full z-20 px-4 text-sm text-neutral-400">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p>
              Powered by{" "}
              <Link
                className="hover:underline"
                href={heroContent.footer.poweredBy[0].href}
              >
                {heroContent.footer.poweredBy[0].label}
              </Link>
            </p>
            <p>
              Styled with{" "}
              <Link
                className="hover:underline"
                href={heroContent.footer.poweredBy[1].href}
              >
                {heroContent.footer.poweredBy[1].label}
              </Link>
              ,{" "}
              <Link
                className="hover:underline"
                href={heroContent.footer.poweredBy[2].href}
              >
                {heroContent.footer.poweredBy[2].label}
              </Link>{" "}
              &{" "}
              <Link
                className="hover:underline"
                href={heroContent.footer.poweredBy[3].href}
              >
                {heroContent.footer.poweredBy[3].label}
              </Link>
            </p>
          </div>
          <span>
            Designed and Developed by{" "}
            <Link
              className="hover:underline"
              href={heroContent.footer.credit.href}
            >
              {heroContent.footer.credit.label}
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
