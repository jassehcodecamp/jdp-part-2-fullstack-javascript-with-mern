import "./App.css"
import RatingCard from "./RatingCard"

function App() {
  return (
    <>
      <main>
        <h1>Interactive Rating Component</h1>
        <RatingCard />
      </main>

      <footer>
        <div className="attribution">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>
        <p className="copyright">
          &copy; JCC - Part 2 of the Junior Developer Program - 2022. All rights
          reserved.
        </p>
      </footer>
    </>
  )
}

export default App
