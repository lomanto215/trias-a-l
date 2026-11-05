// Hero layar penuh dari 21st.dev (hero-section-4), disesuaikan untuk aplikasi ini:
// - tombol memakai <Link> React Router agar navigasi tidak me-reload halaman;
// - teks selalu putih dan overlay lebih gelap (45%) agar terbaca di atas foto,
//   termasuk di mode gelap (text-primary-foreground menjadi gelap di mode gelap);
// - grup tombol boleh turun baris di layar sempit.
import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  imageUrl: string;
}

// Container mengatur animasi anak-anaknya muncul bergantian.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-black/45" aria-hidden="true" />

        <motion.div
          className="z-10 flex max-w-4xl flex-col items-center justify-center text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 md:text-xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
            variants={itemVariants}
          >
            <Button asChild size="lg">
              <Link to={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
