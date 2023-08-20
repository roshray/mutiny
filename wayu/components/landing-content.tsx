"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Joe Mc Mallan",
        avatar: "J",
        about: "A charismatic, slick-talking businessman and a tech visionary obsessed with pursuing the next big thing, despite lacking technical skills",
        aboutTitle: "About",
        title: "President of Giant",
        description: "Best Product of all times, I personally invested from building to launch in public,it has potential to disrupt the PC tech Industry."
    },
    {
        name: "Gordon",
        avatar: "G",
        title: "Creator of Giant",
        description: "I and the team built Giant and Giant PRO in a workplace name KillRoom, a gateway to disrupt the PC tech Industry."
    },
    {
        name: "Cameron",
        avatar: "C",
        title: "President of Mutiny",
        description: "I and personally looked into it,it has potential to disrupt the tech Industry."
    },
    {
        name: "Donna",
        avatar: "D",

        about: "Donna takes the opportunity to pursue her own ambitions when she joins Mutiny to co-manage the company with Cameron",
        aboutTitle: "About",
        title: "Co-Manager of Mutiny Community",
        description: "I and the Engineers in the house built the chat one-on-one and turns into community i.e One-Many,it showed a good traction and more no.of od users stayed 10,000+ hours on the line,that's disrupt and introduced the era of Chat Applications."
    },
]


export const LandingContent = () => {
    
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {testimonials.map((item) => (
                    <Card
                        key={item.description}
                        className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader className="">
                            <CardTitle 
                                className="flex items-center gap-x-2"
                            >
                                <div className="">
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                                
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                            <CardContent className="pt-4 px-0">
                                <p className="text-lg font-extrabold">{item.aboutTitle}</p>
                                {item.about}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            
        </div>
    )
}