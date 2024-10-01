export default function Filters() {
    return (
        <div>
            <form>
             <label htmlFor="location">Location</label>
            <input type="text" name="location" />
            <p>Filters</p>
            <label htmlFor="equip">Vehicle equipment</label>
            <input type="radio" name="equip" />
            </form>
        </div>
    )
}