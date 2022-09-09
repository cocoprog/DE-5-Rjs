import { CartWidget } from './CartWidget'
import {NavBar} from './NavBar';
import {Logo} from './Logo';


export function Header () {
  return (
    <header>
      <Logo/> 
      <NavBar/>
      <CartWidget cantidadProductos="4" />
    </header>
  )
}
