import BookList from "./assets/images/book-list.png";
import CaloriesCalculator from "./assets/images/calories-calculator.png";
import LoanCalculator from "./assets/images/loan-calculator.png";
import NumberGusser from "./assets/images/number-gusser.png";
import TaskLIst from "./assets/images/task-list.png";

interface CardType {
  image: string;
  name: string;
  link: string;
}

const Card = ({ image,name,link }: CardType) => (
  <div className="mx-10 my-10 w-96 h-80 transform overflow-hidden bg-transparent bg-opacity-40 backdrop-blur-md shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <div className="h-60 overflow-hidden">
    <img
      className="object-cover object-center"
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

function App() {
  return (
    <main className=" h-screen flex flex-col bg-gradient-to-l from-slate-900 to-slate-500 bg-fixed">
      <nav
        className="relative flex w-full flex-wrap items-center justify-between bg-gradient-to-r from-slate-900 to-slate-500 py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a className="text-xl text-neutral-800 dark:text-neutral-200" href="#">Mini Apps</a>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap justify-center align-middle mx-20 ">
        <Card image={BookList} name="Book List" link="https://shankar369.github.io/BookListOOP/"/>
        <Card image={CaloriesCalculator} name="Calories Calculator" link="https://shankar369.github.io/CaloriesCalculator/"/>
        <Card image={LoanCalculator} name="Loan Calculator" link="https://shankar369.github.io/LoanCalculator/"/>
        <Card image={NumberGusser} name="Number Guesser" link="https://shankar369.github.io/NumberGuessingGame/"/>
        <Card image={TaskLIst} name="Task List" link="https://shankar369.github.io/TaskList/"/>
      </div>
    </main>
  );
}

export default App;
