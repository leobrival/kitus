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
      <header className="flex flex-col h-svh w-screen pr-4 pl-8 pb-8 pt-32 justify-around">
        <div className="flex justify-between gap-4 items-end">
          <div className="flex gap-2 items-start">
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
          <div className="w-full flex">
            <div className="w-full flex justify-center">
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
      <footer className="bg-stone-900 h-96 p-6"></footer>
    </div>
  );
}
