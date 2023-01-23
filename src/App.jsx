import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get } from "firebase/database";
import Navbar from "./Components/navbar/Navbar";
import Main from "./Components/main_body/Main";
import { db } from "./firebase/firebase";

function App() {
  // state for storing user data
  const [userData, setUserData] = useState();

  // refrence to the database.
  const dbRef = ref(getDatabase());

  // fetching data from database.
  useEffect(() => {
    get(child(dbRef, `/`))
      .then((snapshot) => {
        // if data is found.
        if (snapshot.exists()) {
          setUserData(snapshot.val());

          // storing data in the localstorage
          localStorage.setItem("user_data", JSON.stringify(snapshot.val()));

          // dispatching storage event.
          const event = new Event("storage");
          dispatchEvent(event);
        }
        // if data is not found
        else {
          console.log("No data available");
        }
      })
      // if some error occurs.
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    // main App
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* main section */}
      <Main data={userData} />
    </div>
  );
}

export default App;
