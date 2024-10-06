import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <p className="text-gray-400 mb-2">Hi, my name is</p>
            <h1
              translate="no"
              className="font-bold text-3xl md:text-5xl tracking-tight text-white"
            >
              Sujal Shah.
            </h1>
            <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-gray-500 mt-1">
              I build things for the web.
            </h2>
            <p className="text-gray-400 mb-16">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products at{" "}
              <a
                href="https://zuru.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Zuru
              </a>
            </p>
          </div>
          <div className="w-[125px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Sujal Shah"
              height={176}
              width={176}
              src="/Sujal.png"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
