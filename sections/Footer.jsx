import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-20 bg-primary-black text-primary-white mt-10">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-4 lg:px-0">
          <Link href="/#" className="text-center">
            <h1>
              Sairam
            </h1>
          </Link>

          <p className="text-center">&copy;2023 @ Sairam Kaushik</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
