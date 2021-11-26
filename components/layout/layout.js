import { isPropertySignature } from 'typescript'
import Header from '../header/header'

function Layout(props) {
    return (
        <div>
            <Header />
            <main>{props.children}</main>
        </div>
    )
}  

export default Layout