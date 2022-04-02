import portfolioItems from "../data/portfolio.json";



const PortfolioGrid = () => {
    return (
        <section className="bg-primary">
            <div class="container p-3">
                <div className="row g-3">
                    {portfolioItems.map(( element ) => (
                        <div className="col-lg-6" key={element.id}>
                            <div className="card h-100">
                                <img src={element.image} class="card-img-top" alt={` ${element.title} project`}/>
                                <div>
                                    <div className="card-body">
                                    <h5 className="card-title"> {element.title} </h5>
                                    <p className="card-text">{element.description}</p>
                                    </div>  
                                    <a href ={element.url} target="_blank" rel="noreferrer" className="card-link">View the Github</a>                              
                                </div>
                                    <div className="card-footer text-end">
                                    <a href ={element.url} target="_blank" rel="noreferrer" className="btn btn-primary">View the Github</a>
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