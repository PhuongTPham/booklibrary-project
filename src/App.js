import React from "react";

//router
import { Route, Switch } from "react-router-dom";

//page
import BookDetail from "./pages/BookDetail";
import NoPage from "./pages/NoPage";
import BookCart from "./pages/BookCart";
import BookGiving from "./pages/BookGiving";
import { Layout } from "antd";
import Header from "./layout/Header";
// component
import BookAuthor from "./components/BookAuthor";
import { BookProvider } from "./context/context";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
function App() {
  return (
    <BookProvider>
    <Layout>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/book-cart" component={BookCart} />
            <Route path="/book/details/:id" component={BookDetail} />
            <Route path="/author/:authorId" component={BookAuthor} />
            <Route path="/book/giving-book" component={BookGiving} />
            <Route path="/*" component={NoPage} />
          </Switch>
        <Footer />
    </Layout>
    </BookProvider>
  );
}

export default App;
