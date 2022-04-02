import portfolioItems from "../../data/portfolio.json";



const PortfolioGrid = () => {
    return (
        <section className="bg-primary">
            <div class="container p-3">
                <div className="row g-3">
                    {portfolioItems.map((item) => (
                        <div className="col-md-6" key={item.id}>
                            <div className="card card-body">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    )

}



export default PortfolioGrid;