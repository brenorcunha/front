import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//BrowserRouter: elemente responsável pelo controle dos estados da URL da aplicação;
//Switch/ Routes: sistema de match da rota e URL ;
//Route: declara uma rota e qual elemente deve ser renderizado quando a rota for ativada.
//exact informa ao Switch que a rota a ser ativada deve ser exatamente igual a que foi atribuída, se não adicionássemos isso a rota /register também ativaria a rota.


import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../components/Register";

function Routes1() {
	return(
		<BrowserRouter>
			<Routes>				
				<Route path="/" element={<Login />} />;
				<Route path="/login" element={<Login />} />;
				<Route path="/register" element={<Register />} />;
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routes1;