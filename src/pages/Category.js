import React from 'react'

export default function Category() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4 text-center">
                            <h3>Browse by Category</h3>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start">
                                <div className="full-background" style={{backgroundImage: "url('https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')"}}></div>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-white font-weight-bolder">Web Development</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start">
                                <div className="full-background" style={{backgroundImage: "url('https://images.unsplash.com/photo-1640622842924-fb0017b9d786?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2072&amp;q=80')"}}></div>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-white font-weight-bolder">Data Science&nbsp;</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start">
                                <div className="full-background" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2076&amp;q=80')"}}></div>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-white font-weight-bolder">Marketing</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start">
                                <div className="full-background" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')"}}></div>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-white font-weight-bolder">Artificial Intelligence</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
