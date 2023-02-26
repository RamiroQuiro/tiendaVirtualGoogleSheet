import Header from './components/header'
import Footer from "./Footer/Footer";
import Cart from "./cart/page"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
  
      <head />
      <body
      cz-shortcut-listen="true"
       className="bg-gray-100  w-full mx-auto overflow-x-hidden">
        <Header />
        <div className="flex flex-col w-full items-center justify-center p-0 md:items-start md:flex-row">
              {children}
        </div>
        <Footer/>
        <Cart/>
      </body>
    </html>
  )
}
