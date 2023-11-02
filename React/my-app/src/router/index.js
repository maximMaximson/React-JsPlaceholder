import About from "../Pages/About";
import Login from "../Pages/Login";
import PostIdPage from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";


export const privateRoutes = [
  { path: '/about', element: About, exact: true },
  { path: '/posts', element: Posts, exact: true },
  { path: '/posts/:id', element: PostIdPage, exact: true },
]

export const publicRoutes = [
  { path: '/login', element: Login, exact: true },
]