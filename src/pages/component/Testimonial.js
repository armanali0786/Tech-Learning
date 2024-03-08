
import { Button, Card, Badge, CardFooter, CardBody } from '@chakra-ui/react'
import { FaBookmark, FaCalendarAlt } from "react-icons/fa";
import TestimonialDb from '../../data/TestimonialDb';

export default function Testimonial() {
  return (
    <>
      {/* <Card className="max-w-sm w-full mx-auto bg-light rounded-lg">
        <CardBody className="p-6">
          <div className="flex items-center">
            <Badge className="h-6 w-6">
              <img
                alt="Company logo"
                className="rounded-lg"
                height="24"
                src={user}
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width="24"
              />
            </Badge>
            <Badge className="ml-auto">
              <FaBookmark className="h-4 w-4" />
            </Badge>
          </div>
          <p className="mt-4 text-xl font-semibold">Senior Frontend Engineer</p>
          <p>at MicroSoft</p>
          <div className="grid gap-0.5 my-4 text-xs items-start sm:grid-flow-col">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="h-4 w-4 opacity-50" />
            San Francisco
          </div>
          <div className="flex items-center gap-1.5">
            <FaClock className="h-4 w-4 opacity-50" />
            Full-time
          </div>
        </div>
          <p className="border/t border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-850">
            <div className="prose dark:prose-dark">
              <p>
                This course does not teach everything but the basics of everything frontend and backend. I enjoyed the course, the jokes, the projects, challenges.
              </p>
            </div>
          </p>
          <div className="mt-4 grid gap-0.5 text-xs items-start sm:grid-flow-col">
            <div>
              <p className="text-base font-medium">$120,000</p>
              <p className="text-xs">per year</p>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="h-4 w-4 opacity-50" />
              Apply by August 25, 2023
            </div>
          </div>
        </CardBody>
        <CardFooter className="border/t border-gray-200 p-4 grid gap-2 items-center bg-black dark:bg-gray-850">
          <Button text={"Placed"} className="w-full" variant="outline">
            View Details
          </Button>
          <Button className="w-full">Placed</Button>
        </CardFooter>
      </Card> */}
      {TestimonialDb.map((placement, index) => (
        <Card key={index} className="max-w-sm w-full mx-auto bg-light rounded-lg">
          <CardBody className="p-6">
            <div className="flex items-center">
              <Badge className="h-6 w-6">
                <img
                  alt="Company logo"
                  className="rounded-lg"
                  height="24"
                  src={placement.companyLogo}
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width="24"
                />
              </Badge>
              <Badge className="ml-auto">
                <FaBookmark className="h-4 w-4" />
              </Badge>
            </div>
            <p className="mt-4 text-xl font-semibold">{placement.jobTitle}</p>
            <p>at {placement.companyName}</p>
            <p className="border/t border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-850">
              <div className="prose dark:prose-dark">
                <p>{placement.description}</p>
              </div>
            </p>
            <div className="mt-4 grid gap-0.5 text-xs items-start sm:grid-flow-col">
              <div>
                <p className="text-base font-medium">{placement.salary}</p>
                <p className="text-xs">{placement.salaryType}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="h-4 w-4 opacity-50" />
                Apply by {placement.applyBy}
              </div>
            </div>
          </CardBody>
          <CardFooter className="border/t border-gray-200 p-4 grid gap-2 items-center bg-black dark:bg-gray-850">
            <Button text={"Placed"} className="w-full" variant="outline">
              View Details
            </Button>
            <Button className="w-full">Placed</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}


