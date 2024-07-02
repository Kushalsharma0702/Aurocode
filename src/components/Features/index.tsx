import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

const Features = () => {
  // Define your custom features here
  const features = [
    {
      id: 1,
      title: "Website Design",
      description: "Crafting visually appealing and functional websites tailored to your business.",
      icon: "icon-design", // Replace with appropriate icon class or component
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating intuitive and responsive mobile applications to extend your business reach.",
      icon: "icon-mobile", // Replace with appropriate icon class or component
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Implementing strategies to improve your website's visibility and search engine rankings.",
      icon: "icon-seo", // Replace with appropriate icon class or component
    },
    // Add more features as needed
  ];

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Discover our tailored solutions designed to enhance your online presence and business growth."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
