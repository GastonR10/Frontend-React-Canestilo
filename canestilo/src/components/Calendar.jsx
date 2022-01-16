const Calendar = () => {
    return (
        <div id="reservas">
            
            <h2>Agenda</h2>
            <div>
                <input type="date"/>
                <button>Reservar Baño</button>
            </div>
            <div>
                <input type="date"/>
                <button>Reservar Corte</button>
            </div>
        </div>
    );
};

export default Calendar;