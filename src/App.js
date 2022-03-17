import "./App.css";
import Countries from "./component/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((respond) => respond.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting every country of the world!!!</h1>
//       <h3>Available countries: {countries.length}</h3>
//       {countries.map((country) => (
//         <p>
//           <Country
//             name={country.name.common}
//             continents={country.continents}
//             flags={country.flags.png}
//           ></Country>
//         </p>
//       ))}
//     </div>
//   );
// }

// function Country(Props) {
//   return (
//     <div>
//       <h2>Name: {Props.name}</h2>
//       <h2>Continents: {Props.continents}</h2>
//     </div>
//   );
// }
export default App;
