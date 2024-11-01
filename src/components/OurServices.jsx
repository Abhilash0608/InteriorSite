import { serviceData, workAchievements } from "../utils/servicesData"
import SectionHeader from "./SectionHeader"
const OurServices = () => {
    return (
        <main className="max-w-[90vw] m-auto">
            <div className="grid grid-cols-2 items-center py-8 ">
                {/* <div className="flex flex-col space-y-2 justify-start items-start p-8 flex-1">
                    <h1 className="main-heading">Explore our Best</h1>
                    <div className="flex w-full justify-start items-center space-x-6     ">
                        <div className="underline"></div>
                        <h1 className="italic-heading"> Services</h1></div>

                </div> */}
                <SectionHeader mainHeading="Explore our Best" subHeading="Services" />
                <div className="border-div">
                    <div className="flex gap-8">
                        {workAchievements.map((item) => {
                            return (
                                <div className="flex service-card flex-col gap-4">
                                    <div className="flex">
                                        <h1 className="text-[36px]">{item.title}</h1><p>+</p>
                                    </div>
                                    <div className="header-line"></div>
                                    <div className="text-[18px] text-gray-400">{item.description}</div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
            <div>
                <div className="card-container ">
                    {serviceData.map((service) => (
                        <div
                            key={service.id}
                            className="card"

                        >
                            <h3 className="card-no">{`0${service.id}`}</h3>
                            <h2 className="card-title">{service.title}</h2>
                            <p className="card-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
export default OurServices