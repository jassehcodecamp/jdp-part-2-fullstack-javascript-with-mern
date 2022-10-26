import logo from "./assets/images/logo.svg"

const NAV_ITEMS = ["Home", "New", "Popular", "Trending", "Categories"]

function App() {
  return (
    <div className="container mx-auto py-6 xl:24 2xl:px-32">
      <header className="flex justify-between items-end py-6">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="flex items-center space-x-6 text-gray-500">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mt-10">
        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-9">
            <div className="col-span-2 h-[21.5rem] bg-[url('./assets/images/image-web-3-desktop.jpg')] bg-cover bg-no-repeat bg-center"></div>

            <div className="mt-[2px]">
              <h1 className="lg:text-4xl xl:text-5xl 2xl:text-[3.5rem] font-extrabold tracking-tighter xl:pr-8">
                The Bright Future of Web 3.0?
              </h1>
            </div>

            <div className="xl:pr-6">
              <p className="text-gray-500 text-sm xl:text-base leading-[1.35rem] xl:leading-6">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <a
                href="/"
                className="inline-block py-3.5 px-11 bg-red-500 text-white uppercase text-sm mt-8 font-semibold tracking-widest"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="hero-aside bg-black py-6 px-4 h-96"></div>
        </div>

        <div className="footer"></div>
      </main>
    </div>
  )
}

export default App
