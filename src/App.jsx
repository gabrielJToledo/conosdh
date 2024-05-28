import './App.css';
import './Normalize.css'

// Importe dos componentes
import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
