import { cabin, hanken } from "@/app/layout";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 xl:max-w-3xl">
        {/* CLAMP!!!! */}
        <h1
          className={`${hanken.className} background-animate text-5xl font-bold leading-none sm:text-7xl bg-gradient-to-r from-indigo-300 via-red-300 to-yellow-200 text-transparent bg-clip-text uppercase`}>
          Grow Your Business with an amazing website
        </h1>
        <p className={`${cabin.className} px-4 lg:px-8 mt-8 mb-12 text-lg xl:text-xl`}>
          Are you ready to take your business to the next level with a website that looks amazing,
          loads in a flash, adapts to any device and attracts more visitors with smart SEO
          optimization?
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="bg-indigo-200 px-8 py-3 m-2 text-lg font-semibold rounded">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
