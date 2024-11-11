const Footer = () => {
  return (
    <>
      <h2
        className="font-bold text-xl md:text-2xl lg:text-4xl text-[#09080F]
        text-center mb-4"
      >
        Gadget Heaven
      </h2>
      <p className="font-medium text-xs md:text-base text-[#09080F]/60 text-center">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="text-black mt-4" />
      <footer className="footer p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
