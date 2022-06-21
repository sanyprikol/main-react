// 1. Описати всю сім'ю сімпсонів (5 персонажів)
function Character(props) {
    const {name, age, inf, picture, alt} = props

    return (
    <div>
    <h2>{name}</h2>
    <h3>{age}</h3>
    <p>{inf}</p>
    <img src={picture} alt={name}/>

    </div>
    )
}


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

export default Character;