import Image from "next/image";
import Link from "next/link";
import beImg from "../public/images/be.png";
import html5Svg from "../public/html5.svg";
import css3Svg from "../public/css3.svg";
import reactSvg from "../public/react.svg";
import nexticon_darkSvg from "../public/nexticon_dark.svg";
import nexticon_lightSvg from "../public/nexticon_light.svg";
import javascriptSvg from "../public/javascript.svg";
import typescriptSvg from "../public/typescript.svg";

export default function Home() {
  return (
    <section className="flex h-full flex-col items-center justify-center min-w-96">
      <div className="w-48  h-48 md:w-64 md:h-64 flex justify-center items-center">
        <Image
          alt="Bunyamin Erdal"
          src={beImg}
          width={250}
          height={250}
          placeholder="blur"
          className="rounded-full shadow-md mt-5 shadow-primary"
          priority
        />
      </div>
      <div className="mt-5 p-3 border-b flex flex-col items-center">
        <p className="text-xl md:text-3xl font-bold px-1 md:px-5">
          I&apos;m a Front-end Developer
        </p>
      </div>
      <div className="flex gap-2 text-primary my-5">
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={html5Svg}
            width="48"
            height="48"
            priority
          />
        </div>
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={css3Svg}
            width="48"
            height="48"
            priority
          />
        </div>
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={reactSvg}
            width="48"
            height="48"
            priority
          />
        </div>
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={nexticon_darkSvg}
            width="48"
            height="48"
            className="sr-only dark:not-sr-only "
            priority
          />
          <Image
            placeholder="empty"
            alt="react"
            src={nexticon_lightSvg}
            width="48"
            height="48"
            className=" dark:sr-only not-sr-only "
            priority
          />
        </div>
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={javascriptSvg}
            width="48"
            height="48"
            priority
          />
        </div>
        <div className="w-5 h-5 md:w-14 md:h-14 flex justify-center items-center">
          <Image
            placeholder="empty"
            alt="react"
            src={typescriptSvg}
            width="48"
            height="48"
            priority
          />
        </div>
      </div>
      <div className="mt-24 flex gap-1 font-light text-pretty text-xs">
        <span>Copyright ©</span> <Link href={"/"}>Bünyamin ERDAL</Link>
        <span>2024</span>
      </div>
    </section>
  );
}
