import { ArrowLeft, Compass } from 'lucide-react';
import { Button, PageWrapper, SEO } from '../components';

export function NotFound() {
  return (
    <PageWrapper className="py-20 md:py-28">
      <section className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center md:p-12">
        <Compass className="mx-auto text-[#F5A623]" size={36} />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">404 / Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">This frame is out of range.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#A3A3A3]">
          The page you requested does not exist or has moved. Return to the portfolio to continue exploring selected 3D case studies.
        </p>
        <Button className="mt-8" to="/portfolio">
          <ArrowLeft size={18} /> Back to Portfolio
        </Button>
        <SEO title="Page Not Found" description="The requested Maherison Daddy page could not be found." noindex />
      </section>
    </PageWrapper>
  );
}
