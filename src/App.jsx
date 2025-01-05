import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-white overflow-hidden relative">
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <Header />
        <Hero />
      </section>
    </main>
  );
}

export default App;
