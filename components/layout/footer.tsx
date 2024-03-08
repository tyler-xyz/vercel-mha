const styles = {
  footer: {
    backgroundColor: "#244C5A",
  },
};
export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-opacity-100 bg-blue py-5 footer-mha bottom-0 text-center">
      <p className="font-low font-display text-white">
        Need Additional Help? Find more on our {" "}
        <a
          className="font-low font-display text-white underline transition-colors inline-flex"
          href="https://mhawny.org/jt1/about/"
          target="_self"
          rel="noopener noreferrer"
        >
          website
        </a>
      </p>
    </div>
  );
}
