import Banner from "./components/Banner";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Promotion from "./components/Promotion";
import { allProducts, featuredMugs } from "./lib/placeholder-data";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className="mx-auto mt-32 max-w-[940px] space-y-32 px-4">
        <Greeting />

        <Section title="Featured Mugs">
          <ProductList products={featuredMugs} columns={2} />
        </Section>

        <Section title="More products">
          <ProductList products={allProducts} columns={3} compact />
        </Section>

        <Section title="Buy 2 mugs and get a coffee magazine free">
          <Promotion />
        </Section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
