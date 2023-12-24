import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-16 bg-primary-black text-primary-white mt-10">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Link href="/#">
            <h1>
              Sairam <span className="text-primary-white">Kaushik</span>
            </h1>
          </Link>

          <p>&copy;2023 @ Sairam Kaushik</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
