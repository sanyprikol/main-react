export default function User ({user, lift}) {
    const button = () => {
        lift(user.id);
    }
    return (
        <div>
            {user.name}
            <button onClick={button}>Click</button>
        </div>
    );
}