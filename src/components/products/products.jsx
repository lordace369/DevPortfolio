import './product.scss'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Products = ({img,link,project,desc}) => {
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    return(
        <div className={darkMode? "p darkglow" : "p glow"}>
            <div className="p-browser" style={{ backgroundColor: darkMode && 'rgb(160, 0, 0)' }}>
                <div className="p-circle "></div><div className="p-circle "></div><div className="p-circle "></div>
                <h4 className="p-name" >{project} </h4>
            </div>
            {/* <a href={link} target='_blank' rel='noreferrer'> <img className="p-img" src={img} alt={project} /></a> */}
            <img className="p-img" src={img} alt={project} />
            <a href={link} target='_blank' rel='noreferrer'>
                <div className= {darkMode? "p-desc bgD" : "p-desc bgL"} >
                    <h2> {project}</h2>
                    <p>{desc}</p>
                </div>
            
            </a>
        </div>
    )
}
export default Products