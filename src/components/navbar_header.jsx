import React from 'react'
import { Selected_Site_Context } from '../Context_Hub';

function navbar() {
    
    const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)
    let Display_Selected_Site = <p className='Orbitron text-green-600 text-2xl m-10'>{Selected_Site}</p>
    return (  
    <div  className='flex flex-row'>
        <div className='w-1/2 flex items-start justify-start'>
            <p className='Orbitron text-green-600 text-5xl mt-5 ml-10'>{Selected_Site}</p>
        </div>
        <div className='w-1/2 flex flex-row items-end justify-end'>

            <section 
            onClick={() => set_Selected_Site('About_Me_Page')}
            className='Orbitron text-white text-lg m-10 hover:text-xl hover:text-lime-500'
            >
                About Me
            </section>
            
            <section 
            onClick={() => set_Selected_Site('Portfolio_Page')}
            className='Orbitron text-white text-lg m-10 hover:text-xl hover:text-rose-600'
            >
                Portfolio
            </section>
            
            <section 
            onClick={() => set_Selected_Site('Services_Page')}
            className='Orbitron text-white text-lg m-10 hover:text-xl hover:text-cyan-400'
            >
                Services
            </section>

            <section 
            onClick={() => set_Selected_Site('Contact_Me_Page')}
            className='Orbitron text-white text-lg m-10 hover:text-xl hover:text-orange-500'
            >
                Contact Me
            </section>

        </div>
    </div>
    );
}

export default navbar;