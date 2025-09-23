export default function Subscription() {
  return (
    <>
      <h2 className="flex justify-center text-3xl font-bold text-white">
        Coffee Updates
      </h2>
      <form
        action=""
        className="flex flex-col justify-center gap-4 md:flex-row"
      >
        <input
          type="text"
          placeholder="CUSTOMER@COFFEESTYLE.IO"
          className="basis-1/3 p-4 text-center tracking-widest text-white uppercase outline-1 outline-gray-400"
        />
        <button className="bg-white p-4 text-black uppercase">Subscribe</button>
      </form>
    </>
  );
}
