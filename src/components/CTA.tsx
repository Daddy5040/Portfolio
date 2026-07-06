import { Button } from './Button';

export function CTA() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center md:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Available for commissions</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
          Need premium product visuals?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A3A3A3]">
          Let’s create photorealistic CGI visuals that increase product value, strengthen brand identity, and support your next launch.
        </p>
        <Button className="mt-8" to="/contact">Start a project</Button>
      </div>
    </section>
  );
}
