import Data from '../Data.jsx'

function Output(){

    return(
        <div className="output-section" id="Output">
            <h2>Output </h2>
                <div className="total-consumption">
                    <h3>Total Power Consumption</h3>
                    <p id="total-power"></p>
                </div>
            
                <h2>Appliance Specific Details</h2>
            <table className="appliance-table">
                <thead>
                    <tr>
                        <th>Appliance Name</th>
                        <th>Average Power Consumption (W)</th>
                        <th>Threshold</th>
                        <th>Usage Pattern</th>
                    </tr>
                </thead>
                <tbody id="inputValuesBody">
                
                </tbody>
            </table>
            
            <div className="suggestions">
                    <h3>Suggestions:</h3>
                        <h4 style={{ color: '#04a364', display: 'flex' }} id="Threshold"></h4>
                    <ul id="suggestion-list">
                        
                    </ul>
            </div>
        </div>    
    );
}

export default Output