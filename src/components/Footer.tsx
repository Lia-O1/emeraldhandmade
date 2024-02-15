const Footer = () => {
  return (
    <div className="py-8 md:pl-8 md:flex md:items-center">
      <div className="text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
