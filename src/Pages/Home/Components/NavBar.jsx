
function NavBar(){
    return(
        <nav>
            <div className="Nav_bar">
                <div className="parent_a" id="parent_a_1">Energy Usage</div>
                <div id="Menubox_1" className="Menubox">
                    <a href="#" className="mb_a">Energy Usage</a>
                    <a href="#" className="mb_a">Carbon Footprint</a>
                </div>
                
                <div className="parent_a" id="parent_a_2">View</div>
                <div id="Menubox_2" className="Menubox">
                    <a href="#" className="mb_a">Material Comparision</a>
                    <a href="#" className="mb_a">Reports</a>
                    <a href="#" className="mb_a">Articles</a>
                </div>
        
                <div className="parent_a" id="parent_a_3">Renewable Energy</div>
                <div id="Menubox_3" className="Menubox">
                    <a href="#" className="mb_a">Renewable Energy Potential</a>
                    <a href="#" className="mb_a">Renewable Energy Data</a>
                </div>
        
                <div className="parent_a" id="parent_a_4">Profile</div>
            </div>
        </nav>
    );
}

export default NavBar