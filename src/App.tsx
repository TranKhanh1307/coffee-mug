import Banner from "./components/Banner";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Promotion from "./components/Promotion";
import { allProducts, featuredMugs, stories } from "./lib/placeholder-data";
import Stories from "./components/Stories";
function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className="mt-32 space-y-32">
        <Section>
          <Greeting />
        </Section>

        <Section title="Featured Mugs">
          <ProductList products={featuredMugs} columns={2} />
        </Section>

        <Section title="More products">
          <ProductList products={allProducts} columns={3} />
        </Section>

        <Section title="Buy 2 mugs and get a coffee magazine free">
          <Promotion />
        </Section>

        <Section className="mx-0 h-[340px] max-w-screen bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg')] bg-cover bg-fixed bg-center px-0" />

        <Section title="Behind the mugs, lifestyle stories">
          <Stories stories={stories} />
        </Section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
