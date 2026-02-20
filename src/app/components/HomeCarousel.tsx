import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const SLIDE_INTERVAL_MS = 5000;
const CAROUSEL_BASE_PATH = `${import.meta.env.BASE_URL}assets/carousel`;

type FloatingSlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

function circularDistance(index: number, activeIndex: number, total: number) {
  const raw = index - activeIndex;
  const half = Math.floor(total / 2);
  if (raw > half) return raw - total;
  if (raw < -half) return raw + total;
  return raw;
}

export function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: FloatingSlide[] = useMemo(
    () => [
      // EDIT LINE: ~Floating Carousel Slide 1
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-01-live-team-dashboard.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-01-live-team-dashboard.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Live Team Dashboard",
        description: "Track attendance, lateness, and staffing at a glance.",
      },
      // EDIT LINE: ~Floating Carousel Slide 2
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-02-smart-shift-scheduling.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-02-smart-shift-scheduling.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Smart Shift Scheduling",
        description: "Build and adjust shifts quickly across departments.",
      },
      // EDIT LINE: ~Floating Carousel Slide 3
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-03-overtime-insights.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-03-overtime-insights.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Overtime Insights",
        description: "Monitor premium hours and overtime costs in real time.",
      },
      // EDIT LINE: ~Floating Carousel Slide 4
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-04-employee-self-service.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-04-employee-self-service.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Employee Self-Service",
        description: "Let staff view schedules and submit requests instantly.",
      },
      // EDIT LINE: ~Floating Carousel Slide 5
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-05-payroll-ready-reports.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-05-payroll-ready-reports.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Payroll-Ready Reports",
        description: "Export accurate summaries for payroll and compliance.",
      },
      // EDIT LINE: ~Floating Carousel Slide 6
      // WHAT TO REPLACE: Replace /assets/carousel/carousel-06-mobile-workforce-view.png with real image
      {
        src: `${CAROUSEL_BASE_PATH}/carousel-06-mobile-workforce-view.png`,
        alt: "Sparkle Timekeeping feature preview",
        title: "Mobile Workforce View",
        description: "Manage teams from anywhere with responsive tools.",
      },
    ],
    [],
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="pt-20 sm:pt-24 pb-12 bg-muted/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="rounded-2xl border border-border bg-white shadow-[0_20px_45px_rgba(15,23,42,0.16)] overflow-hidden">
            <div className="h-[200px] sm:h-[240px] overflow-hidden">
              <ImageWithFallback
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground">
                {slides[activeIndex].title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {slides[activeIndex].description}
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-1">Previous</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="mr-1">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="relative hidden lg:block lg:h-[460px] lg:mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => {
            const delta = circularDistance(index, activeIndex, slides.length);
            const isCenter = delta === 0;
            const isSide = Math.abs(delta) === 1;

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                aria-label={`Show ${slide.title}`}
                aria-current={isCenter ? "true" : undefined}
                className="absolute left-1/2 top-[56%] w-[86%] max-w-[760px] -translate-y-1/2 rounded-2xl border border-border bg-white text-left transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  transform: `translate(-50%, -50%) translateX(${
                    delta * 54
                  }%) scale(${isCenter ? 1 : isSide ? 0.84 : 0.7})`,
                  opacity: isCenter ? 1 : isSide ? 0.72 : 0,
                  zIndex: isCenter ? 30 : isSide ? 20 : 10,
                  pointerEvents: isCenter || isSide ? "auto" : "none",
                  boxShadow: isCenter
                    ? "0 20px 45px rgba(15, 23, 42, 0.16)"
                    : isSide
                      ? "0 14px 30px rgba(15, 23, 42, 0.10)"
                      : "none",
                }}
              >
                <div className="h-[280px] overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground line-clamp-2">
                    {slide.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                index === activeIndex
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-primary/30 hover:bg-primary/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
