import React from 'react'
import '../assets/css/theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Feature() {
    return (
        <>
            <div class="page-header min-vh-50 m-3 p-4 border-radius-xl" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1596496050755-c923e73e42e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80')"
            }}
            >
                <span class="mask bg-gradient-dark opacity-7"></span>
                <div class="container h-100">
                    <div class="row my-8">
                        <div class="col-lg-7 justify-content-bottom">
                            <h1 class="text-white display-5 font-weight-bolder fadeIn2 fadeInBottom" spellcheck="false">All the skills you need in one place</h1>
                            <p class="text-white opacity-8 fadeIn3 mb-4 fadeInBottom">From critical workplace skills to technical topics, our catalog supports well-rounded professional development.</p>
                            <form class="d-flex mb-2">
                                <div class="input-group d-flex input-group-lg me-3">
                                    <input type="text" class="form-control w-50" placeholder="Try search 'Social Media Marketing'" />
                                </div>
                                <button class="btn btn-lg btn-icon-only btn-primary mb-0" type="button">
                                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
