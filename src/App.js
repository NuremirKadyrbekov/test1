import './App.css';

function App() {
  return (
    <div className="App">
     <header>
        <h1>Добро пожаловать на космический мини-сайт!</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#about">О космосе</a></li>
            <li><a href="#planets">Планеты</a></li>
            <li><a href="#galaxies">Галактики</a></li>
        </ul>
    </nav>

    <section id="about">
        <h2>О космосе</h2>
        <p>Космос - это бесконечная пространственная область, включающая в себя звезды, планеты, галактики и многие другие объекты.</p>
    </section>

    <section id="planets">
        <h2>Планеты</h2>
        <p>Солнечная система включает в себя восемь планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун.</p>
    </section>

    

    <footer>
        <p>© 2023 Космический мини-сайт. Все права защищены.</p>
    </footer>
    </div>
  );
}

export default App;
