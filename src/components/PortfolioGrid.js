import portfolioItems from "../data/portfolio.json";
import aboutMeimg from '../IMG_0109.jpeg';

console.log('portfolioItems',portfolioItems)

portfolioItems.map((item) => {
    if(item.id === 1){
        item.calendarImage = aboutMeimg;
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
                    {portfolioItems.map(({ id, title, url, image, description, calendarImage }) => (
                        <div className="col-lg-6" key={id}>
                            <div className="card h-100">
                                <img src={calendarImage} className="card-img-top" alt={` ${title} project`}/>
                                <div>
                                    <div className="card-body">
                                    <h5 className="card-title"> {title} </h5>
                                    <p className="card-text">{description}</p>
                                    </div>  
                                    <a href ={url} target="_blank" rel="noreferrer" className="card-link">View the Github</a>                              
                                </div>
                                    <div className="card-footer text-end">
                                    <a href ={url} target="_blank" rel="noreferrer" className="btn btn-primary">View the Github</a>
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