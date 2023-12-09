import Image from 'next/image';

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
              on building accessible, human-centered products at{' '}
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
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/sujal_shah10"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:shahc9437@gmail.com"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="h-7 ml-2">get in touch</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
