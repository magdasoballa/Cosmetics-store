import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/reducers";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
