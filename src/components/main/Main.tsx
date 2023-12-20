import image from "../../assets/Image.png";
import cardIcon from "../../assets/Cards icon.svg";
import coinIcon from "../../assets/Coin icon.svg";
import purseIcon from "../../assets/Purse icon.svg";
import logosMobile from "../../assets/Logos 1282.svg";
import logosDesktop from "../../assets/Logos.png";
import user from "../../assets/User Feedback Image.svg";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";

interface Cards {
  icon: string;
  title: string;
  description: string;
}

export const Main = () => {
  const initialCards: Cards[] = [
    {
      icon: cardIcon,
      title: "Customizable card",
      description:
        "Custom your own card for your exact incomes and expenses needs.",
    },
    {
      icon: coinIcon,
      title: "No payment fee",
      description:
        "Transfer your payment all over the world with no payment fee.",
    },
    {
      icon: purseIcon,
      title: "All in one place",
      description:
        "The right place to keep your credit and debit cards, boarding passes & more.",
    },
  ];
  return (
    <main className="text-center px-5 flex flex-col gap-12 sm:w-96 mx-auto lg:w-[1200px] -z-10">
      <div className="flex flex-col gap-12 lg:flex-row lg:mt-16 lg:text-start">
        <div className=" flex flex-col gap-10 lg:justify-center ">
          <h1 className="text-4xl font-medium text-blanco leading-relaxed lg:text-7xl lg:leading-snug">
            Sass Landing Page Template
          </h1>
          <p className="text-white opacity-40 lg:text-xl lg:leading-10">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div>
            <button className="btn bg-amarillo text-primario text-base font-semibold px-10 rounded-2xl lg:text-xl lg:px-16 hover:bg-amarillo">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-dark-gray rounded-xl">
          <img src={gif1} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="divider"></div>
        <img src={logosMobile} alt="" className="lg:hidden" />
        <img src={logosDesktop} alt="" className="hidden lg:block" />
        <div className="divider"></div>
      </div>
      <div className="bg-[#FDF5DF] rounded-lg h-48 lg:w-full lg:h-auto lg:rounded-2xl">
        <img
          src={image}
          alt="imagen de fondo"
          className="h-full object-cover"
        />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        {initialCards.map((card, index) => (
          <section className="mt-10 lg:w-72" key={index}>
            <div className="flex flex-col gap-14 items-center justify-between py-5">
              <figure>
                <img src={card.icon} alt="Shoes" />
              </figure>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-white">
                  {card.title}
                </h2>
                <p className="leading-loose text-white opacity-40">
                  {card.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="bg-violeta rounded-2xl px-5 py-12  flex flex-col gap-12  lg:px-36 lg:py-20">
        <p className="text-primario font-semibold text-2xl leading-loose lg:text-start">
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </p>
        <div className="flex items-center  justify-center gap-2 lg:justify-start">
          <img src={user} alt="User Profile Image" className="w-20" />
          <div>
            <span className="text-primario font-semibold opacity-40">
              Jonny Owens
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(0, 0, 0, 1)" }}
                >
                  <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:text-start lg:justify-between lg:mt-20">
        <div className="px-5 flex flex-col gap-10">
          <h2 className="font-semibold text-4xl leading-relaxed text-blanco lg:text-7xl">
            Questions? Let’s talk
          </h2>
          <p className="font-normal text-white opacity-40">
            Contact us through our 24/7 live chat. We’re always happy to help!
          </p>
          <div>
            <button className="btn bg-amarillo text-primario text-base font-semibold px-10 rounded-2xl ">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <img src={gif2} alt="" className="" />
        </div>
      </div>
    </main>
  );
};
