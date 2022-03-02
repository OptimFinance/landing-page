import { ChevronRight } from "../atom/Icon";

const Subscription = () => {
  return (
    <section className="px-5 mb-14">
      <div className="px-5 py-10 bg-subscription-colorful bg-cover bg-center bg-no-repeat rounded-2xl">
        <div className="mb-5 gradient-text font-medium leading-tight text-[30px] from-[#e886b9] to-[#337fff]">
          Notify me when
          <br />
          Optim is out!
        </div>
        {/* Email input box */}
        <div className="bg-white rounded-sm">
          <div className="px-5 py-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-optim-dark w-full bg-transparent focus-within:outline-none"
            />
          </div>
          <div className="text-center py-5 border-t border-opacity-10 border-optim-dark">
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tl	from-[#e886b9] to-[#337fff]">
              Get notified
              <span className="inline-flex align-middle justify-center ml-2 -mt-0.5">
                <ChevronRight size={16} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
