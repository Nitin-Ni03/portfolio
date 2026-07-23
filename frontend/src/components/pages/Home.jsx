// import { Link } from "react-router-dom";

const Home = () => {
  const isActive = (path) => location.pathname === path;
  return (
    <div className="flxed left-0 top-0 w-full bg-black backdrop-blur-md border-b-white border-amber-700 x-50 transition-all duration-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a to="/" className="shrink-0 flex items-center text-xl">
              <span className="font-bold  tracking-tight">Ni</span>
              <span className="text-orange-500">3</span>
            </a>

            <div className="hidden md:ml-10 md:space-x-8">
              <a
                to="/"
                className={`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-semibold transition-all ${
                  isActive("/")
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
