import Header from "./components/Header"
import SalesCard from "./components/SelesCard"
import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <h1>Olá Mundão sem porteira!</h1>
            <NotificationButton />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
