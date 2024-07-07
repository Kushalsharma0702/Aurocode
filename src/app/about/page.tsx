import Head from 'next/head';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Aurocode: Empowering Startups with Innovative Solutions</title>
        <meta name="description" content="Learn about Aurocode, a leading provider of web development, SEO optimization, and cybersecurity services. Discover how we help startups thrive with cutting-edge solutions." />
        <meta property="og:title" content="About Us - Aurocode: Empowering Startups with Innovative Solutions" />
        <meta property="og:description" content="Learn about Aurocode, a leading provider of web development, SEO optimization, and cybersecurity services. Discover how we help startups thrive with cutting-edge solutions." />
        <meta property="og:url" content="http://www.yoursite.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://www.yoursite.com/about-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="About Us - Aurocode: Empowering Startups with Innovative Solutions" />
        <meta name="twitter:description" content="Learn about Aurocode, a leading provider of web development, SEO optimization, and cybersecurity services. Discover how we help startups thrive with cutting-edge solutions." />
        <meta name="twitter:image" content="http://www.yoursite.com/about-image.jpg" />
        <link rel="canonical" href="http://www.yoursite.com/about" />
      </Head>
      <Breadcrumb
        pageName="About Us"
        description="Learn about Aurocode, a leading provider of web development, SEO optimization, and cybersecurity services. Discover how we help startups thrive with cutting-edge solutions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
