// IMPORTS STANDAR DE REACT
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//IMPORT NECESARIOS PARA REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
//IMPORT DE MIS COMPONENTES AL Q REFERENCIA EL ROUTER
import { Home } from './routes/home';
import { About } from './routes/about';
import { Contact } from './routes/contact';
import { Invoices } from './routes/invoices';
import { Expenses } from './routes/expenses';
import { Invoice } from './routes/invoice';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element= {<App />}>
          {/* path debe ser igual al escrito en la prop To de los Link en el componente App */}
          <Route path="home" element= {<Home />}/>
          <Route path="about" element= {<About />}/>
          <Route path="contact" element= {<Contact />}/>
          <Route path="invoices" element= {<Invoices />}>
            {/* ":invoiceId" es un Url Param, puede valer cualquier valor siempre que el patron sea el mismo*/}
            <Route path=":invoiceId" element= {<Invoice />}/>
          </Route>
          <Route path="expenses" element= {<Expenses />}/>
          {/* Aqui agrego una ruta, para el caso de que una ruta linkeada no coincida con las que tengo creadas */}
          {/* Esto podria ser otro elemento dentro de la carpeta /src/routes q podria llamarse NoMatch */}
          <Route
            // el "*" realiza un match SOLO cuando niguna otra ruta lo hace
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
