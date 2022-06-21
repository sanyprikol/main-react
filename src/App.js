import './App.css';
import Character from "./Components/Character";

function App() {
    return (
        <div>
            <Character
                name={'Bart'}
                age={12}
                inf={"Бартоломю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героївмультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодшіnсестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батькомnБарт є одним із найвідоміших персонажів у цьому серіалі."}
                picture = 'https:upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
                alt = {'Bart'}
            />
            <Character
                name={'Homer'}
                age={48}
                inf={'Гомер Джей Сімпсон — один із головних героїв мультсеріалу «Сімпсони». Гомер — милий та кумедний, проте іноді грубий і неввічливий батько родини. Він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}
                picture= 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
                alt={'Homer'}
            />
            <Character
                name={'Marge'}
                age={44}
                inf={'Марджорі Сімпсон — один з головних персонажів анімаційного серіалу Сімпсони, дружина Гомера Сімпсона, мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, а також Барта, Лісу і чоловіка.'}
                picture= 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
                alt={'Marge'}
            />
            <Character
                name={'lisa'}
                age={8}
                inf={'Лі́са Марі Сімпсон (англ. Lisa Marie Simpson) — персонажка анімаційного телесеріалу «Сімпсони», озвучена Ярдлі Сміт. Автор серіалу Мет Ґрейнінґ назвав героїню іменем сестри.'}
                picture='https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'
                alt = 'lisa'
            />
            <Character
                name={'Maggie'}
                age={1}
                inf={'Маргарет «Меґґі» Сімпсон — одна з головних героїв мультсеріалу Сімпсони, найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі не росте і завжди залишається немовлям у повзунках та підгузнику. '}
                picture= 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
                alt = {'Maggie'}
            />

        </div>


    );
}

export default App;
