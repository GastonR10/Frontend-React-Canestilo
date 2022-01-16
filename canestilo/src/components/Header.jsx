const Header = () => {
    return (
        <header>
        
        <div id="buscador">
            <h1>Bienvenido!</h1>
            <input className="search" type="text" value placeholder="Buscar productos..."/>
            <button className="search">Buscar</button>
        </div> 
    </header>
    );
};

export default Header;