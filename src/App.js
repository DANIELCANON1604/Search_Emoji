import Structure, {Emojis, Footer} from "./components/Structure/Structure";
import React from "react";
import Paginacion from "./components/Paginacion/Paginacion";



const sample = {
  name: "cara sonriente",
  category: "emoticones y  personas",
  unicode: "U+1F600",
  htmlCode: "\u0026#128512;"
}

function App() {
  const [listEmojis, setListEmojis] = React.useState ([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const searchInputRef = React.useRef(null);

     React.useEffect (() => {
      fetch ("https://emojihub.yurace.pro/api/all")
      .then ((response) => response.json ())
      .then ((dataJson) => {setListEmojis(dataJson)});
      }, [])

  const handleSearch = () => {
      setSearchTerm(searchInputRef.current.value.toLowerCase());
      };
    
  const filteredEmojis = listEmojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm)
      );

  const [pagina, setPagina] = React.useState(1);
  const [porPagina, setPorPagina] = React.useState(32);
    
  const maximo = listEmojis.length / porPagina;

  return (
    <div>
        <Structure
          handleSearch={handleSearch} 
          searchTerm={searchTerm} 
          searchInputRef={searchInputRef} 
        />
        <div className="container-body">
            {filteredEmojis
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((emoji, index) => (<Emojis
            key={index}
            emoji={emoji.unicode[0]} 
            name={emoji.name}
          />
          ))
          }
       </div>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
       <div>
          <Footer/>
       </div>
    </div>
  )

}

export default App;