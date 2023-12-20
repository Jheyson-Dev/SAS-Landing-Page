export const Header = () => {
  return (
    <div className="navbar container mx-auto sticky top-0 z-10 bg-primario">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="hidden lg:block">
        <button className=" text-blanco font-base py-3 px-10 mr-4">
          Sing Up
        </button>
        <button className="bg-violeta text-primario font-semibold py-3 rounded-lg px-10">
          Login
        </button>
      </div>
    </div>
  );
};
