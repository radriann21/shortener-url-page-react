import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Statistics } from "./components/Statistics";
import { BoostLinks } from "./components/BoostLinks";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-white overflow-hidden relative font-primaryRegular">
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <Header />
        <Hero />
      </section>
      <Statistics />
      <BoostLinks />
    </main>
  );
}

export default App;
