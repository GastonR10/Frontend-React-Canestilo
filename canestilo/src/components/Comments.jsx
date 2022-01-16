const Comments = () => {
    

    return (
        <div id="comentarios2">
            
            <h2>Comentarios</h2>
            <div id="info">Agradecemos nos ayudes a mejorar día a día</div>
            <textarea id="text" onkeypress="return limita(event, 280);" onkeyup="actualizaInfo(280)" cols= "30" rows="6"></textarea>
            <button id="submitComment" type="submit">Subir comentario</button>
        </div>
    );
};

export default Comments;