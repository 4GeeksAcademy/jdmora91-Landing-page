import React from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";



//create your first component
const Home = () => {
	// Aqui Logica... 

	console.log("Hola Mundo");
	
	// ...Aqui acaba la Logica
	return (
		<div className="text-center bg-warning">
			<Navbar/>
			<div className="container">
			<Jumbotron/>
		
			<Card titulo="Hamburguesa Especial" descripcion="Hamburguesa con Papas Y bebidas.Precio: 15$" imagen="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
			<Card titulo="Hot-Dog" descripcion="Hot Dog con papas y bebeidas. precio 13$"imagen="https://images.unsplash.com/photo-1627054248949-21f77275a15f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
			<Card titulo="Salchi-Papa" descripcion="salchi-papas con papas y bebeidas. precio 14$"imagen="https://images.unsplash.com/photo-1626663011519-b42e5ee10056?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
			<Card titulo="arroz frito" descripcion="arroz frito con pollo y verduras. precio 12$"imagen="https://images.unsplash.com/photo-1679735386220-e8888925676e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
			
			</div>
			<Footer/>
		</div>
	);
};

export default Home;