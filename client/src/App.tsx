import { ApolloProvider } from "@apollo/client";
import HomePage from "./pages/home/home";
import "./App.css";
import client from "./commons/apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Chuck Norris API</h1>
        <HomePage />
      </div>
    </ApolloProvider>
  );
};

export default App;
