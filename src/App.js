import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skill';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './util.js/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// export const ThemeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme((curr ) => (curr === "dark" ? "light" : "dark"));
  // };

  return (
    <ThemeProvider>
      <div className="App" >
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
