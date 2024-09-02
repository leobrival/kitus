// import GlitchButton from "@/components/GlitchButton";
import GlitchText from "@/components/GlitchText";
import MissionReport from "@/components/MissionReport";
import PixelTextFormatter from "@/components/PixelTextFormatter";
import Link from "next/link";

// https://departuremono.com/
// https://les-survivalistes.fr/products/lauthentique-kit-de-survie-les-survivalistes
// https://www.tooooools.app/effects/displace
// https://tympanus.net/codrops/2024/06/19/hover-animations-for-terminal-like-typography/

export default function HomePage() {
  return (
    <div className="bg-stone-100 font-mono text-stone-800">
      <header className="flex h-svh w-screen flex-col justify-around pb-8 pl-8 pr-4 pt-32">
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-start gap-2">
            <GlitchText text="Survival_kit" />
            <p className="text-sm">v1.346</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="#">↓ DOWNLOAD</Link>
            <Link href="#">♥ DONATE</Link>
            {/* <GlitchButton href="/download">↓ DOWNLOAD</GlitchButton> */}
            {/* <GlitchButton href="/donate">♥ DONATE</GlitchButton> */}
          </div>
        </div>
        <div className="min-h-32"></div>
        <div className="flex flex-col">
          <div className="flex w-full">
            <div className="flex w-full justify-center">
              <PixelTextFormatter
                text="Departure mono is a monospaced pixel font with a lo-fi technical vibe"
                maxWidth={25}
              />
            </div>
            <MissionReport></MissionReport>
          </div>
          {/* <div className="transition-transform duration-400 ease-out hover:rotate-12">
            <BadgeCard></BadgeCard>
          </div> */}
        </div>
      </header>
      <section className="h-96">
        <PixelTextFormatter
          text="It's great for working witch tabular data"
          maxWidth={25}
        />
      </section>
      <section className="p-6">
        <PixelTextFormatter
          text="Departure mono is a monospaced pixel font with a lo-fi technical vibe"
          maxWidth={25}
        />
        <MissionReport></MissionReport>
      </section>
      <footer className="h-96 bg-stone-900 p-6">
        <PixelTextFormatter
          text="And of course, departure mono is prefect for your 8-bit video game or ASCII art"
          maxWidth={25}
        />
      </footer>
    </div>
  );
}
