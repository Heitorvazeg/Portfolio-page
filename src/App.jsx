import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -144px 0px'
      });

      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
      });

      return () => observer.disconnect();
      
  }, []);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App;
