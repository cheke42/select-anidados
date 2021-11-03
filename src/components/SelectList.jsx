import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  console.log(`Resp Petición ${title}:`,data[title])
  let options = data[title]
  //console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label><br />
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((el) => (<option key={el.id} value={el.id}>{el.nombre}</option>))}
        {/*{data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}*/}
      </select>
      <br />
    </>
  );
};

export default SelectList;