import './Structure.css';
import './Emoji.css';


const Structure = ({ handleSearch, searchTerm, searchInputRef }) => {
    return (
      <div className='container-general'>
        <div className='container-header'>
          <h1>Emojipedia</h1>
          <h3>¿Cuál emoji necesitarás hoy?</h3>
        </div>
        <div className='container-search'>
          <input
            className='input'
            placeholder='Busca tu emoji'
            value={searchTerm}
            onChange={handleSearch}
            ref={searchInputRef} // Asigna la referencia al input de búsqueda
          />
        </div>
      </div>
    );
  };
  

const Emojis = (props) =>{
    return (
        <div className='container-body'>
            <div className='container-emojis'>
                <div className='zoom'>{String.fromCodePoint(props.emoji.replace("U+", "0x"))}</div>
                <h3 className='name'>{props.name}</h3>
            </div>
        </div>
    )
}


const Footer = () => {
    return (  
        <footer>
            <p className="footer">🪐 by <a href="https://github.com/DANIELCANON1604/Search_Emoji" target="_blank"> Daniel </a></p>
        </footer>
    );
}

export {Footer};
export {Emojis};
export default Structure;