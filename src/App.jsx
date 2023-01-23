import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "./firebase/firebase";
import Navbar from "./Components/navbar/Navbar";
import Main from "./Components/main_body/Main";

function App() {
  const [userData, setUserData] = useState();
  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
          localStorage.setItem("user_data", JSON.stringify(snapshot.val()));
          const event = new Event("storage");
          console.log(snapshot.val());
          dispatchEvent(event);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main data={userData} />
    </div>
  );
}

export default App;
