import Index from "./components/index/index";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Index/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
