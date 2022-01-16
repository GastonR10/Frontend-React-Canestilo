const Nav = () => {
    return (
        <nav>
            <ul>
                <li id="registro"><a className="navegacion" href="#anclaInicio" style={{ textDecoration: 'none' }}>INICIO</a></li>
                <li id="nosotros"><a className="navegacion" href="#anclaNosotros" style={{ textDecoration: 'none' }}>NOSOTROS</a></li>            
                <li id="accesorios"><a className="navegacion" href="#anclaAccesorios" style={{ textDecoration: 'none' }}>ACCESORIOS</a></li>
                <li id="agenda"><a className="navegacion" href="#anclaAgenda" style={{ textDecoration: 'none' }}>AGENDA</a></li>
                <li id="comentarios"><a className="navegacion" href="#anclaComentarios" style={{ textDecoration: 'none' }}>COMENTARIOS</a></li>
            </ul>
        </nav>
    );
};

export default Nav;