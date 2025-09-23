export default function Subscription() {
  return (
    <>
      <h2 className="text-2xl font-bold text-white">Coffee Updates</h2>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="CUSTOMER@COFFEESTYLE.IO"
          className="block w-full p-4 text-white outline-1 outline-gray-400"
        />
        <button className="text-white">Subscribe</button>
      </form>
    </>
  );
}
