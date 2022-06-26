

function UserDetails ({user}) {
    return (
        <div>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.city}</div>
            <div>{user.address.zipcode}</div>
            <div>{user.address.geo.lat}</div>
            <div>{user.address.geo.lng}</div>
            <h2>{user.phone}</h2>
            <h2>{user.website}</h2>
            <div>{user.company.name}</div>
            <div>{user.company.catchPhrase}</div>
            <div>{user.company.bs}</div>
        </div>
    );
}
export {UserDetails};