
function NavBar() {


    return (
        <nav>
            <div className="Nav_bar">
                <div>
                    <a href="#"  className="parent_a" id="parent_a_1">Energy Usage</a>
                    <div id="Menubox_1" className="Menubox">
                        <a href="#" className="mb_a">Energy Usage</a>
                        <a href="#" className="mb_a">Carbon Footprint</a>
                    </div>
                </div>   
                <div>
                    <a href="#" className="parent_a" id="parent_a_2">View</a>
                    <div id="Menubox_2" className="Menubox">
                        <a href="#" className="mb_a">Material Comparision</a>
                        <a href="#" className="mb_a">Reports</a>
                        <a href="#" className="mb_a">Articles</a>
                    </div>   
                </div>
                <div>
                    <a href="#" className="parent_a" id="parent_a_3">Renewable Energy</a>
                    <div id="Menubox_3" className="Menubox">
                        <a href="#" className="mb_a">Renewable Energy Potential</a>
                        <a href="#" className="mb_a">Renewable Energy Data</a>
                    </div>   
                </div>
                <a href="#" id="parent_a_4" className="parent_a">Profile</a>
            </div>
        </nav>
    );
}

export default NavBar
