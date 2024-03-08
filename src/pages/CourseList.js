import { Link } from "react-router-dom"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Store from "./CourseStore/Store";

export default function Component() {
    return (
        <section className="row px-4 md:px-6 py-6 md:py-12 grid md:grid-cols-[1fr_200px] gap-6 items-start bg-light" >
            <div className="col-12">
                <div className=" grid gap-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <div className="grid gap-1">
                            <h1 className="text-3xl font-bold tracking-tight">Courses & Workshops</h1>
                            <p className="text-gray-500 dark:text-gray-400">Browse our latest courses and workshops.</p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-2 md:gap-4 text-black">
                                <FormControlLabel
                                    control={<Checkbox id="enrolled" />}
                                    label="Enrolled"
                                    className="flex items-center gap-2 font-normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox id="completed" />}
                                    label="Completed"
                                    className="flex items-center gap-2 font-normal"
                                />
                            </div>
                            <div className="ml-auto flex items-center gap-2 md:gap-4 text-black">
                                <FormControlLabel
                                    control={<Checkbox id="beginner" />}
                                    label="Beginner" 
                                    className="flex items-center gap-2 font-normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox id="intermediate" />}
                                    label="Intermediate"
                                    className="flex items-center gap-2 font-normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox id="advanced" />}
                                    label="Advanced"
                                    className="flex items-center gap-2 font-normal"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold tracking-tight">Introduction to JavaScript</h2>
                                <p className="text-sm leading-none dark:text-gray-400">
                                    Learn the basics of JavaScript programming with our interactive course.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div />
                                    <small className="text-sm font-semibold">$49.99</small>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold tracking-tight">Mastering React Framework</h2>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                                    Dive deep into React.js with our comprehensive workshop materials.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div />
                                    <small className="text-sm font-semibold">$79.99</small>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold tracking-tight">CSS Layouts Unleashed</h2>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                                    Create stunning web layouts with our hands-on tutorial.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div />
                                    <small className="text-sm font-semibold">$29.99</small>
                                </div>
                            </div>
                        </div> */}
                </div>
                <Store />
            </div>

            {/* <div className="col-4">
                <div className="flex flex-col gap-4">
                    <Card>
                        <CardHeader className="pb-0">
                            <p>Sort By</p>
                            <p>Select one or more options to sort the courses.</p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="grid gap-2">
                                <FormControlLabel
                                    control={<Checkbox id="sort-name" />}
                                    label="Name"
                                    className="flex items-center gap-2 font-normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox id="sort-price" />}
                                    label="Price"
                                    className="flex items-center gap-2 font-normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox id="sort-duration" />}
                                    label="Duration"
                                    className="flex items-center gap-2 font-normal"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div> */}

        </section>
    )
}

