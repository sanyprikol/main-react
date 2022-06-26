
function User ({item, button}) {

    return (
        <div>
            <h3>{item.id}</h3>
            <h2>{item.name}</h2>
            <button onClick={() => {button(item)}}>Click</button>
        </div>
    );
}
export {User};
