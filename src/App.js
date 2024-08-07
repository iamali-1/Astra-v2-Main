import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/About";
import Career from "./pages/Career";
import Footer from "./components/partials/Footer";
import ScrollToTop from "./components/partials/ScrollToTop";
// import Switcher from "./components/partials/Switcher";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
// import Blogs from "./pages/Blogs";
import Error from "./pages/404";
import Projects from "./pages/Projects";
import ServiceDetails from "./pages/ServiceDetails";
// import BlogDetail from "./pages/blogs-details";
import ProjectDetails from "./pages/ProjectDetails";
import Portfolio from "./pages/Portfolio";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Test from "./Test";
import Login from "./panel/screens/Login";
import Layout from "./panel/Layout/Layout";
import Dashboard from "./panel/screens/Dashboard";
import Blogs from "./panel/screens/Blogs";
import CreateBlog from "./panel/screens/CreateBlog";
import Categories from "./panel/screens/Categories";
import BlogDetail from "./panel/screens/BlogDetail";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/blogs-details";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/career" element={<Career />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        {/* <Route path="/test" element={<Test />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs-list" element={<Blogs />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/cagories-list" element={<Categories />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        {/* create-blog */}
        {/* cagories-list */}

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
      {/* <Switcher /> */}
    </BrowserRouter>
  );
}

export default App;
