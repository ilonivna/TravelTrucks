export default function Filters() {
    return (
        <div>
            <form>
             <label htmlFor="location">Location</label>
            <input type="text" name="location" />
            <p>Filters</p>
            <label htmlFor="equipment">Vehicle equipment</label>
            <input type="checkbox" name="equipment" value="ac" />
            <input type="checkbox" name="equipment" value="automatic" />
            <input type="checkbox" name="equipment" value="kitchen" />
            <input type="checkbox" name="equipment" value="tv" />
            <input type="checkbox" name="equipment" value="bathroom" />


            <label htmlFor="equipment">Vehicle type</label>
            <input type="radio" name="type" value="van" />
            <input type="radio" name="type" value="integrated" />
            <input type="radio" name="type" value="alcove" />
            <button type="submit">Search</button>
            </form>
        </div>
    )
}