import {useEffect} from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.css";
function MyApp({Component, pageProps}) {
  useEffect(() => {
    TagManager.initialize({gtmId: "GTM-5CGN44H"});
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;