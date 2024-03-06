const styles = {
  footer: {
    backgroundColor: "#244C5A",
  },
};
export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-opacity-100 bg-purple py-5 footer-mha bottom-0 text-center">
      <p className="font-low text-white">
        Need Additional Help? Find more on our {" "}
        <a
          className="font-low text-white underline transition-colors inline-flex"
          href="https://mhawny.org/jt1/about/"
          target="_self"
          rel="noopener noreferrer"
        >
          website 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" className="w-4 h-4 inline-flex">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
          />
          </svg>
        </a>
      </p>
    </div>
  );
}
