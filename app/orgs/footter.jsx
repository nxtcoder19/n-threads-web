import { TiFolder } from "react-icons/ti";
import { FooterCardSection } from "../atoms/footer-card-section";

export const Footer = () => {
  return (
    <div className="mt-24 px-8 mb-6">
      <div className="md:flex justify-between">
        <div className="md:place-self-center">
            N-Threads
          {/* <Logo /> */}
        </div>
        <div className="flex">
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
        </div>
      </div>
      <div className="mt-6">
        <hr />
      </div>
      <div className="mt-4 md:mt-6"></div>
      <div>
        <div className="md:flex justify-between">
          <div className="md:flex">
            <div className="flex justify-between text-gray-500">
              <span>Privacy Policy</span>
              <span className="ml-3">Terms of services</span>
              <span className="ml-3">Contact</span>
            </div>
          </div>
          <div>
            <div className="mt-5 md:mt-0">
              <span className="text-gray-500">
                Welcome to N-Threads
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};