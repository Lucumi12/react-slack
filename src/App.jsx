import './App.scss'
import Session1 from './components/Session1.jsx'
import Logo from './logo.png'

function App() {

return(


<div className='todo'>
	<header>
		<div className='contenedor'>
			<div className='logotipo'><img className='Logo' src={Logo}></img>slack</div>
			<nav className='start-nav'>
				<a href="#" className='activo'>Producto <i className='fa-solid fa-angle-down'></i></a>
				<a href="#">Enterprise</a>
				<a href="#">Recursos</a>
				<a href="#">Precios</a>
			</nav>
			<div className='contenedor-final-nav'>
				<h1 className='nav-sesion-text'>Iniciar sesion</h1>
				<button className='btn-ventas'>HABLAR CON VENTAS</button>
				<button className='btn-probar-gratis'>PROBAR GRATIS</button>
			</div>
		</div>
	</header>

	<Session1 />

</div>



)

}

export default App