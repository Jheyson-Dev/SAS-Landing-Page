import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

export const Template = () => {
  return (
    <div className="bg-primario">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
