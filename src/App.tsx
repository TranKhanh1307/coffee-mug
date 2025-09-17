import Banner from "./components/Banner";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import SectionTitle from "./components/SectionTitle";
import { allProducts, featuredMugs } from "./lib/placeholder-data";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="mx-auto mt-32 max-w-[940px] space-y-32">
        <Greeting />
        <section>
          <SectionTitle>Featured Mugs</SectionTitle>
          <div className="mt-32 grid gap-y-24 md:grid-cols-2 md:gap-x-4">
            {featuredMugs.map((mug) => (
              <Product key={mug.name} mug={mug} />
            ))}
          </div>
        </section>
        <section>
          <SectionTitle>More products</SectionTitle>
          <div className="mt-32 grid gap-y-24 md:grid-cols-3 md:gap-x-4">
            {allProducts.map((mug) => (
              <Product key={mug.name} mug={mug} compact />
            ))}
          </div>
        </section>
        <section>
          <SectionTitle>Buy 2 mugs and get a coffee magazine free</SectionTitle>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
