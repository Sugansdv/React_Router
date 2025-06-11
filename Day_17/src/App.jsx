// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import User from './Components/User';
import UserDetails from './Components/UserDetails';
import UserPosts from './Components/UserPosts';
import NotFound from './Components/NotFound';
import Task1 from './Components/Task1';
import Project1 from "./Components/Project1";
import ProductList from "./Components/Project2/ProductList";
import ProductDetails from "./Components/Project2/ProductDetails";
import BlogList from "./Components/Project3/BlogList";
import BlogDetails from "./Components/Project3/BlogDetails";
import MovieList from "./Components/Project4/MovieList";
import MovieDetails from "./Components/Project4/MovieDetails";
import './App.css';
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="user" element={<User />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="user/:id/:name" element={<UserDetails />} />
          <Route path="user/:id/posts" element={<UserPosts />} />
          <Route path="project1/:id" element={<Project1 />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="posts" element={<BlogList />} />
          <Route path="post/:id" element={<BlogDetails />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
