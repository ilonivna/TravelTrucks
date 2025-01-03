import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectFilters } from "../../redux/campers/selectors";
import { setFilters } from "../../redux/campers/slice";
import icons from "../../assets/sprite.svg";
const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

export default function Filters() {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          location: filters.location,
          equipment: filters.equipment,
          type: filters.type,
        }}
        validationSchema={LocationSchema}
        onSubmit={(values) => {
          dispatch(setFilters(values));
        }}
      >
        <Form>
          <div>
            <label htmlFor="location">Location</label>
            <Field as="select" name="location" placeholder="Choose a city">
              <svg width={20} height={20}>
                <use href={`${icons}#icon-map`}></use>
              </svg>
              <option value="Ukraine, Kyiv">Kyiv</option>
              <option value="Ukraine, Odesa">Odesa</option>
              <option value="Ukraine, Kharkiv">Kharkiv</option>
              <option value="Ukraine, Lviv">Lviv</option>
              <option value="Ukraine, Sumy">Sumy</option>
              <option value="Ukraine, Dnipro">Dnipro</option>
            </Field>
          </div>
          <div>
            <p>Filters</p>
                      <h4>Vehicle equipment</h4>
                      <div>
    <label><Field type="checkbox" name="equipment" value="ac" /><p><svg width="20" height="30"><use href={`${icons}`}></use></svg>AC</p></label>
  <label><Field type="checkbox" name="equipment" value="automatic" /><p><svg width="20" height="30"><use href={`${icons}`}></use></svg>Automatic</p></label>
  <label><Field type="checkbox" name="equipment" value="kitchen" /><p><svg width="20" height="30"><use href={`${icons}`}></use></svg>Kitchen</p></label>
  <label><Field type="checkbox" name="equipment" value="tv" /><p><svg width="20" height="30"><use href={`${icons}`}></use></svg>TV</p></label>
  <label><Field type="checkbox" name="equipment" value="bathroom" /><p><svg width="20" height="30"><use href={`${icons}`}></use></svg>Bathroom</p></label>
                      </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

<form>
 

  <label htmlFor="type">Vehicle type</label>
  <input type="radio" name="type" value="van" />
  <input type="radio" name="type" value="integrated" />
  <input type="radio" name="type" value="alcove" />
  <button type="submit">Search</button>

