import Logo from "./assets/images/logo.svg"
const NAV_ITEMS = ["Home", "New", "Popular", "Trending", "Categories"]

function App() {
  return (
    <div>
      <div className="container mx-auto flex justify-between py-5 px-8 items-center">
        <div>
          <img src={Logo} alt="" />
        </div>

        <nav>
          <ul className="flex items-center space-x-4">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem}>
                <a href="/">{navItem}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default App
