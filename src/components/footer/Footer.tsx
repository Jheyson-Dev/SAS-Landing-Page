export const Footer = () => {
  return (
    <footer className="px-5 flex flex-col gap-5 ">
      <div className="divider"></div>
      <div className="sm:w-96 lg:w-[1200px] mx-auto lg:flex lg:justify-between lg:items-center lg:pb-10">
        <h1 className="text-2xl text-blanco font-semibold lg:hidden mt-5">
          Wallet
        </h1>
        <div className="flex flex-col gap-2 lg:order-1 mt-5">
          <span className="text-blanco">Updates right to your Inbox </span>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-dark-gray rounded-xl px-4 py-3"
            />
            <button
              type="submit"
              className="bg-violeta py-3 rounded-xl text-dark-gray text-xl"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:gap-4 gap-5 mt-10">
          <h1 className="text-2xl text-blanco font-semibold hidden lg:block">
            Wallet
          </h1>

          <div className="flex flex-col gap-4 font-semibold text-blanco text-xl lr:order-2 lg:text-base">
            <a href="#">Terms of use</a>
            <a href="#">Cookies policy</a>
            <a href="#">Privacy policy</a>
            <a href="#">© Wallet 2023</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
