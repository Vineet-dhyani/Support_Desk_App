import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar"
import  Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column  min-vh-100">
     <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Support Desk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 jutify-content-end">
            <a target="_blank" className="nav-link" href="/admin">Admin</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
     </header>
     <main>
      <Container>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
         <Route path="/admin" element={<AdminPage/>}></Route>
        </Routes>
      </Container>
       </main>
     <footer className="mt-auto">
      <div className="text-center">ALl right reserved</div>
     </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
