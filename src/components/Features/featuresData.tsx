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
    title: "Crafted for Startups",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* SVG path */}
      </svg>
    ),
    title: "High-quality Design",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more features here...
];

export default featuresData;
