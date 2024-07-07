import Head from 'next/head';
import Hero from '@/components/Hero';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Our Story | Aurocode</title>
        <meta name="description" content="Learn about Aurocode's mission, values, and vision. Discover how we're shaping the future of digital solutions." />
        <meta name="keywords" content="Aurocode, digital solutions, cybersecurity, web development, startup, saas" />
        <meta property="og:title" content="Our Story | Aurocode" />
        <meta property="og:description" content="Learn about Aurocode's mission, values, and vision. Discover how we're shaping the future of digital solutions." />
        <meta property="og:url" content="https://example.com/about" />
        <meta property="og:site_name" content="Aurocode" />
        <meta property="og:image" content="https://example.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Aurocode logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Story | Aurocode" />
        <meta name="twitter:description" content="Learn about Aurocode's mission, values, and vision. Discover how we're shaping the future of digital solutions." />
        <meta name="twitter:image" content="https://example.com/images/twitter-image.jpg" />
      </Head>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center my-8">We are ready to help</h2>
        <div className="flex justify-center">
          <video controls className="max-w-full" style={{ maxWidth: '100%' }}>
            <source src="/images/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default AboutPage;