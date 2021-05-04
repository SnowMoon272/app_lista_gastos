import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";

function useObtenerGasto(id) {
  const [gasto, establecerGasto] = useState("");
  const history = useHistory();

  useEffect(() => {
    db.collection("gastos")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          establecerGasto(doc);
        } else {
          history.push("/lista");
        }
      });
  }, [id, history]);

  return [gasto];
}

export default useObtenerGasto;
