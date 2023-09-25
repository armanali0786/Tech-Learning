import React, { useState } from 'react'
import Button from '../../components/Button'
import Courses from './components/Courses'
import DialogBox from '../../Projects/DialogBox/DialogBox'
import NoteApp from '../NotesApp/NotesApp'
import './Store.css'
// DB
import { coursesDB } from './db/coursesDB'
import { currenciesDB } from './db/currenciesDB'

//Context
import { CurrencyContext } from './context/currencies-context'

document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee"
export default function Store() {

    const [currency, setCurrency] = useState(currenciesDB.Euro);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to open the dialog box
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    // Function to close the dialog box
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <CurrencyContext.Provider value={currency}>
            <div className='container p-1'>
                <div class="header">
                    <a href="#default" class="logo">E-Learning</a>
                    <div class="header-right ">
                        <a class="active" href="/">Home</a>
                        <a href="/e-learing">Tech on E-Learning</a>
                        <a href="/categories">Categories</a>
                    </div>
                </div>
                <NoteApp />
                <h4 className='mb-2 mt-5'>Change Curency</h4>
                {Object.values(currenciesDB).map((cur) => (
                    <Button
                        key={cur.label}
                        text={cur.code}
                        onClick={() => setCurrency(cur)}
                        btnClass={"btn-light btn-sm mx-2"}
                    />
                ))}
                <header className='text-center my-4'>
                    <h1 className='title fs-xl '>Course</h1>
                    <h2 className='text-uppercase mb-2'>Become a Web Developer </h2>
                    {/* <p className='mx-2'>
                        A broad selection of courses
                        Choose from over 210,000 online video courses with new additions published every month
                        <div>
                            E-learning Business
                            Upskill your team with E-learning Business
                        </div>
                    </p> */}
                    {isDialogOpen && (
                    <DialogBox
                        onClose={closeDialog}
                    />
                )}
                </header>

                <Courses list={coursesDB} openDialog={openDialog} />
            </div>
        </CurrencyContext.Provider>
    )
}
