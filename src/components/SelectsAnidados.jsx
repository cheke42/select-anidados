import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "####";

  return (
    <div className="contenedor">
      <h2>Selects Anidados</h2>
      <h3>Argentina</h3>
      <SelectList
        title="provincias"
        url={`http://apis.datos.gob.ar/georef/api/provincias`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="departamentos"
          url={`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${state}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="localidades"
          url={`https://apis.datos.gob.ar/georef/api/localidades?departamento=${town}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
            <ul>
                <li>Provincia: {state}</li>
                <li>Departamento: {town}</li>
                <li>Localidad: {suburb}</li>
            </ul>
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;