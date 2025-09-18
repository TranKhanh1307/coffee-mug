export default function Promo() {
    return (
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-2 md:order-last md:grid-cols-3">
          <img
            className="col-span-2 row-span-2 h-full w-full object-cover"
            src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover"
            src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover"
            src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg"
            alt=""
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <p className="text-gray-400 uppercase">Premium offer</p>
          <h2 className="text-4xl">Get our Coffee Magazine</h2>
          <p className="text-gray-400">
            The most versatile furniture system ever created. Designed to fit your life.
          </p>
          <a
            href="#"
            className="mx-auto block w-fit bg-gray-800 px-4 py-3 text-white uppercase hover:bg-gray-900 md:mx-0"
          >
            Start shopping
          </a>
        </div>
      </div>
    );
  }
  