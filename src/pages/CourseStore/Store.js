import React, { useState } from 'react'
import Button from '../../components/Button'
import Courses from './components/Courses'
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
            <div className='container' style={{marginTop:"5%"}}>
                {/* <h4 className='mb-2 mt-5'>Change Price Curency</h4>
                {Object.values(currenciesDB).map((cur) => (
                    <Button
                        key={cur.label}
                        text={cur.code}
                        onClick={() => setCurrency(cur)}
                        btnClass={"btn-light btn-sm mx-2"}
                    />
                ))} */}
                {/* <header className='text-center my-4'>
                    {isDialogOpen && (
                    <DialogBox
                        onClose={closeDialog}
                    />
                )}
                </header> */}

                <Courses list={coursesDB} openDialog={openDialog} />
            </div>
        </CurrencyContext.Provider>
    )
}
