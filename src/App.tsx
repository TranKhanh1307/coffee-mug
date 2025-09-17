import Banner from "./components/Banner";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import SectionTitle from "./components/SectionTitle";
import { featuredMugs } from "./lib/placeholder-data";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="space-y-32">
        <Banner />
        <Greeting />
        <div>
          <SectionTitle>Featured Mugs</SectionTitle>
          {featuredMugs.map((mug) => (
            <Product key={mug.name} mug={mug} />
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
