import Card from "../components/Card";

import BookList from "../assets/images/book-list.png";
import CaloriesCalculator from "../assets/images/calories-calculator.png";
import LoanCalculator from "../assets/images/loan-calculator.png";
import NumberGuesser from "../assets/images/number-gusser.png";
import TaskLIst from "../assets/images/task-list.png";
import Nav from "../components/Nav";

const projects = [
  {
    image: LoanCalculator,
    name: "Loan Calculator",
    link: "https://shankar369.github.io/LoanCalculator/",
  },
  {
    image: BookList,
    name: "Book List",
    link: "https://shankar369.github.io/BookListOOP/",
  },
  {
    image: CaloriesCalculator,
    name: "Calories Calculator",
    link: "https://shankar369.github.io/CaloriesCalculator/",
  },
  {
    image: TaskLIst,
    name: "Task List",
    link: "https://shankar369.github.io/TaskList/",
  },
  {
    image: NumberGuesser,
    name: "Number Guesser Game",
    link: "https://shankar369.github.io/NumberGuessingGame/",
  },
];

const Home = () => (
  <main className=" h-screen w-screen flex flex-col bg-gradient-to-l from-slate-900 to-slate-500 bg-fixed overflow-scroll">
    <Nav/>
    <div className="flex flex-wrap justify-center p-2">
      {projects.map(({ image, name, link }) => (
        <Card image={image} name={name} link={link} />
      ))}
    </div>
  </main>
);

export default Home;
