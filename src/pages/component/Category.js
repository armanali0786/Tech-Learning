import React from 'react';
import Web from '../../assets/img/web.jpeg';
import DataScience from '../../assets/img/data-science.jpeg';
import Marketing from '../../assets/img/marketing.jpeg';
import Coding from '../../assets/img/coding.jpeg';

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
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: `url(${Web})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-grey font-weight-bolder">Web Development</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: `url(${DataScience})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-grey font-weight-bolder">Data Science&nbsp;</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: `url(${Marketing})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-grey font-weight-bolder">Marketing</h4>
                                    <a href="javascript:;" className="btn btn-outline-white mb-0">View all</a>
                                </div>
                                <span className="mask bg-gradient-dark border-radius-xl z-index-2 opacity-7"></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card h-100 mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: `url(${Coding})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                <div className="card-body w-100 z-index-3 text-center d-flex flex-column align-items-center justify-content-center">
                                    <h4 className="text-grey font-weight-bolder">Artificial Intelligence</h4>
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
