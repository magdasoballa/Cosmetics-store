import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/reducers";
import Wrapper from "./wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Layout>
    </Provider>
  );
}

export default MyApp;
