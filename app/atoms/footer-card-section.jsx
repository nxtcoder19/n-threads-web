export const FooterCardSection = ({ color, icon }) => {
    return (
      <div className="mt-9 md:mt-0">
        <div>
          <div
            className={`${color} items-center rounded-md p-2 text-4xl text-black mr-3.5`}
          >
            {icon}
          </div>
        </div>
      </div>
    );
  };