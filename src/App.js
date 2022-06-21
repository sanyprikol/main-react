import './App.css';
import Character from "./Components/Character";

function App() {
    return (
        <div>
            <Character
                id={1}
                name={'Rick Sanchez'}
                status={"Alive"}
                species={"Human"}
                gender = {"Male"}
                image = 'https://upload.wikimedia.org/wikipedia/uk/thumb/f/f7/RickSanchez.jpg/375px-RickSanchez.jpg'
                alt = {'Rick'}
            />

            <Character
                id={2}
                name={'"Morty Smith'}
                status={"Alive"}
                species={"Human"}
                gender = {"Male"}
                image = 'https://upload.wikimedia.org/wikipedia/uk/thumb/c/c7/%D0%9C%D0%BE%D1%80%D1%82%D1%96.jpg/375px-%D0%9C%D0%BE%D1%80%D1%82%D1%96.jpg'
                alt = {'Morty'}
            />

            <Character
                id={3}
                name={'Summer Smith'}
                status={"Alive"}
                species={"Human"}
                gender = {"Female"}
                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rrR7faMGANux1Mt4p2vp0P_AT9WKssR2bQ&usqp=CAU'
                alt = {'Summer'}
            />

            <Character
                id={4}
                name={'Beth Smith'}
                status={"Alive"}
                species={"Human"}
                gender = {"Female"}
                image = 'https://upload.wikimedia.org/wikipedia/en/5/58/Beth_Smith.png'
                alt = {'Beth'}
            />

            <Character
                id={5}
                name={'Jerry Smith'}
                status={"Alive"}
                species={"Human"}
                gender = {"Male"}
                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh-CyKzoK2JHGjj09MrromV3HDMR2q9vb-A&usqp=CAU'
                alt = {'Jerry'}
            />

            <Character
                id={6}
                name={'Abadango Cluster Princess'}
                status={"Alive"}
                species={"Alien"}
                gender = {"Female"}
                image = 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
                alt = {'Abadango'}
            />



        </div>


    );
}

export default App;
