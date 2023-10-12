import '../App.css'

function Navbar(){
    return <div  className='navbar'>
        <nav>
            <img src='/assets/logo.png' alt='logo' className='logo'/>
            <ul>
                <li href='#'>HOME</li>
                <li href='#'>COURSES</li>
                <li href='#'>SERVICES</li>
                <li href='#'>CAREER</li>
                <li href='#'>ABOUT</li>
                <li href='#'>CONTACT US</li>
            </ul>
            <button className="">REGISTER NOW</button>
        </nav>
    </div>
}

export default Navbar