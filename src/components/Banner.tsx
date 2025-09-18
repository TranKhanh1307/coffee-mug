export default function Banner() {
  return (
    <section className="mx-auto flex h-[530px] max-w-7xl flex-col items-center justify-center gap-6 bg-black/30 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')] bg-cover bg-bottom bg-blend-darken">
      <p className="text-gray-200 uppercase">Best place to buy design</p>
      <h1 className="text-5xl font-semibold text-white">Coffee Mugs</h1>
      <p className="text-center text-gray-200">
        The most versatile furniture system ever created. Designed to fit your
        life, made to move and grow.
      </p>
      <a href="#" className="bg-white p-4 text-sm uppercase hover:bg-gray-200">
        Explore our products
      </a>
    </section>
  );
}
