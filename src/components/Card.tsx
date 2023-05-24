interface CardType {
  image: string;
  name: string;
  link: string;
}

const Card = ({ image, name, link }: CardType) => (
  <div className="lg:mx-10 md:mx-5 sm:mx-2 my-8 w-96 sm:w-80 h-80  transform overflow-hidden bg-transparent bg-opacity-40 backdrop-blur-md shadow-xl duration-300 hover:scale-105 hover:shadow-lg ">
    <div className="h-60 overflow-hidden">
      <img
        className=" h-full object-cover object-left"
        src={image}
        alt="Product Image"
      />
    </div>
    <div className="p-4 bg-transparent">
      <div className="flex items-center justify-between cursor-pointer">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {name}
        </h2>
        {/* <span className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </span> */}
        <a href={link} target="_blank">
          <span className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default Card;
