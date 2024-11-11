import Image1 from '../../../Images/settings leaf.png'
import Image2 from '../../../Images/elec leaf.png'
import Image3 from '../../../Images/save.png'

function Article(){

    return(
        <>
            <div className="Monitor">
            <div className="text_section">
                <h1 className=''>MONITOR</h1>
                <p>Check your energy usage and make sure you're in control of it. Available real-time data for you gives immediate understanding about how much there is of daily consumption in a household or business, helping to identify small areas which can be improved in great amounts.</p>
            </div>
            
            <img className ="sidepic" src={Image1} alt="new" />
            </div>

        <div className="Track">
            <div className="text_section">
                <h1>TRACK</h1>
                <p>You can track your consumption and get better insight into your pattern over time, peak usage, and monthly comparison with performance. In such cases, by establishing your benchmark and reviewing your progress over time, you could address more sustainable energy practices and cut out unnecessary costs.
                </p>
            </div>

            <img className="sidepic2" src={Image2} alt="photo" />
        </div>

        <div className="Save">
            <div className="text_section">
                <h1>SAVE</h1>
                <p>Those insights can then be translated into meaningful action. You save money as well as energy when you realize the effective optimization of energy usage based on monitoring and tracking. It would be upgrading to new appliances, changing your behaviors, or investing in renewable energy sources-this is one step closer to achieving those energy-saving goals.</p>
            </div>
            <img className="sidepic3" src={Image3}alt="photo" />
        </div>
        </>
    );
}

export default Article