
function NavBar() {


    return (
        <nav>
            <div className="input-Nav_bar">
                <div>
                    <a href="#"  className="input-parent_a" id="input-parent_a_1">Energy Usage</a>
                    <div id="input-menubox_1" className="input-menubox">
                        <a href="#" className="mb_a">Energy Usage</a>
                        <a href="#" className="mb_a">Carbon Footprint</a>
                    </div>
                </div>   
                <div>
                    <a href="#" className="input-parent_a" id="input-parent_a_2">View</a>
                    <div id="input-menubox_2" className="input-menubox">
                        <a href="#" className="mb_a">Material Comparision</a>
                        <a href="#" className="mb_a">Reports</a>
                        <a href="#" className="mb_a">Articles</a>
                    </div>   
                </div>
                <div>
                    <a href="#" className="input-parent_a" id="input-parent_a_3">Renewable Energy</a>
                    <div id="input-menubox_3" className="input-menubox">
                        <a href="#" className="mb_a">Renewable Energy Potential</a>
                        <a href="#" className="mb_a">Renewable Energy Data</a>
                    </div>   
                </div>
                <a href="#" id="input-parent_a_4" className="input-parent_a">Profile</a>
            </div>
        </nav>
    );
}

export default NavBar
