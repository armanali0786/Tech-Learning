
import { Link } from "react-router-dom"
import ECard from "../../components/ECard"
export default function Component() {

  const sentenceStyle = {
    backgroundColor: '#B6B6B6', // Grey background color
    borderRadius: '10px', // Border radius
    padding: '10px 5px', // Padding for better appearance
    margin: '5px 0', // Margin to space out the sentences
    color: 'black',
  };

  return (
    // max-w-6xl
    <div className="row grid md:grid-cols-2 items-start  px-4 mx-auto gap-6 lg:gap-12 py-6  bg-white">
      <div className="col-7">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold sm:text-3xl">Getting started with NodeJS</h3>
            <p className="">
              Free Node.js Course: Dive into Backend Development Today!
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold sm:text-3xl">How to obtain a completion certificate</h3>
            <p>
              Discover Node.js with our free course, designed for beginners. Dive into the JavaScript runtime environment and learn to build applications outside the browser. Master the basics of Node.js architecture, Node Package Manager (NPM), and Express Framework through easy-to-follow steps.
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold sm:text-3xl">Who should take this free course</h3>
              <span style={sentenceStyle}>Technical project managers</span>
              <span style={sentenceStyle}>Technical leads</span>
              <span style={sentenceStyle}>Fullstack web developers</span>
              <span style={sentenceStyle}>Quality analysts</span>
          </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold sm:text-3xl">Course Content</h3>
            <ul className="list-disc list-inside grid gap-2 text-black" >
              <li>Module 1: Introduction to Nodejs</li>
              <li>Lesson 02: Node.JS installation on Windows1003:54</li>
              <li>Lesson 03: Node.JS Architecture04:16</li>
              <li>Lesson 04: Node Package Manager(NPM)14:45</li>
              <li>Lesson 05: Node.JS Express Framework34:46</li>
              <li>Lesson 06: Building a REST API using Node.JS24:22</li>
              <li>Lesson 08: Node.JS My SQL Tutorial25:18</li>
              <li>Lesson 09: Node.JS MongoDB Tutorial01:00:44</li>
              <li>Lesson 10: Node.JS Interview Questions and Answers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-4">
        {/* <div className="flex flex-col gap-4 items-start">
            <div className="hidden md:flex items-start">
              <img
                alt="Course Image"
                className="aspect-video object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={225}
                src={Nodejs}
                width={400}
              />
              <div className="grid gap-4 md:gap-10 items-start">
                <h1 className="font-bold text-3xl lg:text-4xl">Introduction to Nodejs</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="grid gap-2 md:gap-4">
                  <p className="text-sm sm:text-base">
                    Created by
                    <Link className="underline" href="#">
                      Infosec
                    </Link>
                  </p>
                  <p className="text-sm sm:text-base">Intermediate • 15-20h • 10 Modules</p>
                </div>
                <div className="grid gap-2 md:gap-4">
                  <p className="text-sm sm:text-base">
                    <button size="sm" variant="outline" className="btn btn-primary">
                      Enroll for Free 
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 items-start">
            </div>
          </div> */}
        <ECard />
      </div>

    </div>
  )
}

