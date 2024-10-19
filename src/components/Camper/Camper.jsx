export default function Camper({ camper }) {
    return (
        <div>
            <img src="" alt="" />
            <h4>{camper.name}</h4>
            <p>{camper.price}</p>
            {/* add to favorites here */}
            <p>{camper.reviews}</p>
            <p>{camper.location}</p>
            <p>{camper.description}</p>
            <ul>
                <li>list of camper features</li>
            </ul>
            <button>Show more</button>
        </div>
    )
}