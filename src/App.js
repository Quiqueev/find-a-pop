import React from "react";
import Header from "./Components/Header";
import SearchField from "./Components/SearchField";
import Banner from "./Components/Banner";
import { useEffect } from "react";
import useState from "react-usestateref";

const App = () => {
  // Used to manage input and add it to the url
  const [urlExtension, setUrlExtension] = useState("");

  // Used to hide and show banners on click
  const [showBanner, setShowBanner] = useState(false);

  // Show loading when wating for API
  const [loading, setLoading] = useState(false);

  // name, price, status, website
  const [dataHt, setdataHt, currDataHt] = useState(null); // Hot topic
  const [dataEe, setdataEe, currDataEe] = useState(null); // Entertainment Earth
  const [dataPb, setdataPb, currDataPb] = useState(null); // Pop in a box
  const [dataBl, setdataBl, currDataBl] = useState(null); // Box Lunch

  // This function is called on change of urlExtension
  // dataHt, dataEe, dataPb, dataBl
  useEffect(() => {
    const response = null;
    const data = null;

    function isBlank(str) {
      return !str || /^\s*$/.test(str);
    }
    console.log(urlExtension);
    if (urlExtension != "" && !isBlank(urlExtension)) {
      async function fetchData(response, data) {
        // console.log("Fetching...");
        // console.log(urlExtension);
        setShowBanner(false);
        setLoading(true);

        var fetchURL = "https://find-a-pop-api.herokuapp.com/" + urlExtension;

        response = await fetch(fetchURL);

        console.log(response); // Check

        data = await response.json();

        const ht = data.Results[0];
        const ee = data.Results[1];
        const bl = data.Results[2];
        const pb = data.Results[3];

        await setdataHt(ht);
        await setdataEe(ee);
        await setdataBl(bl);
        await setdataPb(pb);

        // console.log(data.Results[1])
        // console.log(currDataEe.current);

        setShowBanner(true);
      }

      fetchData(response, data);
    } else {
      setShowBanner(false);
    }
  }, [urlExtension]);

  return (
    <div>
      <Header />

      <SearchField
        changeShow={show => setShowBanner(show)}
        changeUrl={urlExtension => setUrlExtension(urlExtension)}
      />
      {showBanner ? (
        <div className="banners">
          <div className="row">
            <Banner data={currDataHt.current} />
            <Banner data={currDataEe.current} />
          </div>
          <div className="row">
            <Banner data={currDataBl.current} />
            <Banner data={currDataPb.current} />
          </div>
        </div>
      ) : loading ? (
        // <h1 className="loading">Loading...</h1>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
