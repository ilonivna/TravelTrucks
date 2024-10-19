import { fetchCampers } from "../../redux/campers/operations";


export default function TruckList() {
    
    const campers = fetchCampers();
    return (
        <div>
            <ul>
                {campers.map((camper) => (
                    <li key={camper.id}>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}