
function Spaceship ({item}) {

    return (
        <div>
            <div>{item.mission_name}</div>
            <div>{item.launch_year}</div>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>

        </div>
    );
}
export {Spaceship};