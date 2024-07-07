interface Feature {
  id: number;
  icon: JSX.Element; // Or specify an appropriate type for icons
  title: string;
  paragraph: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        {/* SVG path */}
      </svg>
    ),
    title: "A.I. Solutions",
    paragraph: "At Aurocode, we harness cutting-edge AI technology to provide predictive analytics, machine learning models, and automation tools, enhancing efficiency and driving business growth. Partner with us to leverage AI and transform your operations.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/*path svg */}
      </svg>
    ),
    title: "Website Development",
    paragraph: "We craft high-quality, responsive websites tailored to your business needs, ensuring a seamless user experience and strong online presence."},
  {
    id:3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/*path svg */}
      </svg>
    ),
    title: "Comprehensive Cybersecurity Solutions",
    paragraph: "Aurocode provides robust cybersecurity solutions to protect your digital assets. Our comprehensive services include threat detection, prevention, and response to ensure your business remains secure and resilient against cyber threats.",
  },{
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/*path svg */}
      </svg>
    ),
    title: "SEO Optimization",
    paragraph: "Our expert SEO services improve your website's visibility on search engines, driving organic traffic and boosting your online reach.",
  },{
  id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/*path svg */}
      </svg>
    ),
    title: "coming soon",
    paragraph: "Stay tuned with us",
  },
  // Add more features here...
];

export default featuresData;
