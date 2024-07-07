import Head from 'next/head';
import Hero from '../components/Hero';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurocode - Leading Website Development, SEO Optimization, and Cybersecurity Services</title>
        <meta name="description" content="Aurocode is a top agency providing expert website development, SEO optimization, and comprehensive cybersecurity services to help your business thrive online." />
        <meta name="keywords" content="Aurocode, website development, web design, SEO optimization, cybersecurity, cyber security services, web development agency, small business websites, startup websites" />
        <meta name="author" content="Aurocode" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Aurocode - Leading Website Development, SEO Optimization, and Cybersecurity Services" />
        <meta property="og:description" content="Aurocode offers professional website development, SEO optimization, and cybersecurity services to elevate your business online presence." />
        <meta property="og:url" content="https://www.yoursite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yoursite.com/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Aurocode - Leading Website Development, SEO Optimization, and Cybersecurity Services" />
        <meta name="twitter:description" content="Aurocode offers professional website development, SEO optimization, and cybersecurity services to elevate your business online presence." />
        <meta name="twitter:image" content="https://www.yoursite.com/twitter-image.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Aurocode",
              "url": "https://www.yoursite.com/",
              "logo": "https://www.yoursite.com/logo.png",
              "description": "Aurocode is a top agency providing expert website development, SEO optimization, and comprehensive cybersecurity services to help your business thrive online.",
              "sameAs": [
                "https://twitter.com/yourtwitterhandle",
                "https://www.linkedin.com/in/yourlinkedinprofile",
                "https://www.facebook.com/yourfacebookpage"
              ]
            }
          `}
        </script>
        
        <link rel="canonical" href="https://www.yoursite.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ScrollUp />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      </>
  );
}