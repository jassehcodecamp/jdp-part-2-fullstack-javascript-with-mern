import logo from "./assets/images/logo.svg"

const NAV_ITEMS = ["Home", "New", "Popular", "Trending", "Categories"]

const latestNews = [
  {
    title: "Hydrogen VS Electric cars?",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
]

const featuredNews = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    thumbnail: "./assets/images/image-retro-pcs.jpg",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    thumbnail: "./assets/images/image-top-laptops.jpg",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    thumbnail: "./assets/images/image-gaming-growth.jpg",
  },
]

function App() {
  return (
    <div className="container mx-auto pt-6 pb-20 px-10 xl:px-32 2xl:px-40  ">
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

            <div>
              <h1 className="lg:text-4xl xl:text-5xl 2xl:text-[3.5rem] font-extrabold  xl:pr-10 text-primary">
                The Bright Future of Web 3.0?
              </h1>
            </div>

            <div className="xl:pr-6">
              <p className="text-secondary-600 text-sm xl:text-base leading-[1.35rem] xl:leading-6">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <a
                href="/"
                className="inline-block py-3.5 px-11 bg-primary-red text-white uppercase text-sm mt-8 font-bold tracking-widest"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="hero-aside bg-primary py-8 px-7">
            <h2 className="text-primary-orange text-4xl font-bold">New</h2>
            <div className="mt-7">
              <ul className="space-y-8  divide-[hsl(233,15%,40%)] divide-y">
                {latestNews.map(({ title, description }) => (
                  <li key={title} className="pt-8 first:pt-0">
                    <h3 className="text-secondary-100 font-semibold text-xl tracking-tight">
                      {title}
                    </h3>
                    <p className="text-secondary-500 text-opacity-80 mt-2.5 text-sm xl:text-base font-medium leading-6 xl:leading-7">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-24">
          {featuredNews.map((news) => {
            return (
              <div key={news.id} className="flex gap-x-6 items-start">
                <div className="w-1/3">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-2/3">
                  <span className="font-bold text-3xl text-secondary-500">
                    0{news.id}
                  </span>
                  <h3 className="text-primary text-xl font-bold tracking-tight mt-2">
                    {news.title}
                  </h3>
                  <p className="text-secondary-600 text-sm xl:text-base leading-6 xl:leading-[1.7rem] mt-3">
                    {news.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
