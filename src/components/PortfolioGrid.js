import portfolioItems from "../data/portfolio.json";
import Employeeimg from '../assets/employee.png';
import HobbyHubimg from '../assets//brush.jpg';
import DayCalendarimg from '../assets/computer.jpg';
import Weatherimg from '../assets/weather.jpg';

console.log('portfolioItems',portfolioItems)

portfolioItems.map((item) => {
    if(item.id === 1){
        item.calendarImage = Employeeimg;
    }else if (item.id === 2){
        item.calendarImage = HobbyHubimg;
    }else if (item.id === 3){
        item.calendarImage = DayCalendarimg;
    } else if (item.id === 4){
        item.calendarImage = Weatherimg;
    }else{
        item.calendarImage = "http://placekitten.com/g/640/400"
    }
    return ({...item})
})

console.log('new array portfolioItems',portfolioItems)



const PortfolioGrid = () => {
    return (
        <section className="bg-primary">
            <div className="container p-3">
                <div className="row g-3">
                    {portfolioItems.map(({ id, title, url, github,image, description, calendarImage }) => (
                        <div className="col-lg-6" key={id}>
                            <div className="card h-100">
                                <img src={calendarImage} className="card-img-top" alt={` ${title} project`}/>
                                <div>
                                    <div className="card-body">
                                    <h5 className="card-title"> {title} </h5>
                                    <p className="card-text">{description}</p>
                                    </div>  
                                    <a href ={url} target="_blank" rel="noreferrer" className="card-link">View Deployed Application</a>                              
                                </div>
                                    <div className="card-footer text-end">
                                    <a href ={url} target="_blank" rel="noreferrer" className="btn btn-primary">View Github Repo</a>
                                    </div>
                            </div>
                        </div>
                ))}
                </div>
            </div>
        </section> 
    )

}



export default PortfolioGrid;