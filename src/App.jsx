import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HeaderComp from './HeaderFold/HeaderComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomeHeroComp from './HomeFold/HomeHeroComp'
// import LoginComp from './RegistretionFold/LoginComp'
// import SignInComp from './RegistretionFold/SignInComp'
// import CreateBlogFromComp from './CreateBlogFormFold/CreateBlogFromComp'
// import BlogPage from './BlogsFold/BlogPage'
import { Suspense, lazy } from 'react'
import LoadingComp from './LoadingFold/LoadingComp'

const HomeHeroComp = lazy(() => import('./HomeFold/HomeHeroComp'))
const LoginComp = lazy(() => import('./RegistretionFold/LoginComp'))
const SignInComp = lazy(() => import('./RegistretionFold/SignInComp'))
const CreateBlogFromComp = lazy(() => import('./CreateBlogFormFold/CreateBlogFromComp'))
const BlogPage = lazy(() => import('./BlogsFold/BlogPage'))

function App() {

  return (
    <>
    <Suspense fallback={<LoadingComp/>}>
      <BrowserRouter>
        <HeaderComp/>
        <Routes>
          <Route path='/'>
            <Route index element = {<HomeHeroComp/>} />
            <Route path=':slug' element = {<BlogPage/>} />
          </Route>
          <Route path='/login' element = {<LoginComp/>} />
          <Route path='/signup' element = {<SignInComp/>} />
          <Route path='/createBlog' element = {<CreateBlogFromComp/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
