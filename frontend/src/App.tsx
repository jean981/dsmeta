
import Header from "./components/Header"
import SalesCard from "./components/SelesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <h1>Olá Mundão sem porteira!</h1>
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
