import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, ScrollToTop } from "./components";
import Routers from "./routers/Routers";
import { getProducts } from "./store/slices/productSlice";

// General Styles for App
import "./styles/App.css";

function App() {
  //const { isLoading } = useSelector((state) => state.products);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isLanguage = localStorage.getItem("i18nextLng");
  if (isLanguage === "en") {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
  } else if (isLanguage === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    dispatch(getProducts());
    handleLoading();
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (
    <ScrollToTop>
      <Routers />
    </ScrollToTop>
  );
}

export default App;
