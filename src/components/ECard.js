
import Button from "./Button"
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NodeImage from '../assets/img/nodejs.png'
// import { Button } from "@/components/ui/button"
// import { CardTitle, CardContent, Card } from "@/components/ui/card"
import { BiPlay } from "react-icons/bi";

import { FaPlay,FaClock,FaCalendarAlt } from "react-icons/fa";
export default function Component() {
    return (
        <Card className="max-w-sm w-full">
            <div className="aspect-[16/9] relative">
                <img
                    alt="Course cover"
                    className="object-cover rounded-t-lg"
                    src={NodeImage}
                    style={{
                        height:"280px",
                        aspectRatio: "320/180",
                        objectFit: "cover",
                        width:"420px"
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <button className="absolute inset-6 btn btn-primary" variant="outline">
                        Watch Trail
                    </button>
                </div>
            </div>
            <CardContent className="p-6 flex-col items-center space-y-6">
                <div className="items-center space-x-2">
                    <span >
                    <FaPlay style={{ marginRight: '5px' }}/>Intro Video
                    </span>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                            <span><FaClock style={{ marginRight: '5px' }}/>5 Hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span><FaCalendarAlt style={{ marginRight: '5px' }}/>Self-paced video lessons</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 w-full" />

                <div className="">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="font-medium">Price</div>
                        <div className="text-right">FREE</div>
                        <div className="font-medium">Certificate</div>
                        <div className="text-right">Completion Certificate</div>
                        <div className="font-medium">Access</div>
                        <div className="text-right">90 Days of Access</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}





