import React from 'react';


const Team = () => {
    const teamMembers = [
        {
            name: "Ademola Ayomide",
            role: "CEO / Co-Founder Foodimetric",
            image: "assets/images/ayo.png",
            linkedin: "https://www.linkedin.com/in/ayomideademola",
        },
        {
            name: "Aderemi Damilola",
            role: "COO / Co-Founder Foodimetric",
            image: "assets/images/dami.jpg",
            linkedin: "https://www.linkedin.com/in/aderemi-oluwadamilola-",
        },
        {
            name: "Folake Sowonoye",
            role: "Technical Lead / Co-Founder Foodimetric",
            image: "assets/images/folake.png",
            linkedin: "https://www.linkedin.com/in/folake-sowonoye/",
        },
        {
            name: "Yussuf Isaiq",
            role: "Marketing Lead",
            image: "assets/images/labbie.jpg",
            linkedin: "https://www.linkedin.com/in/isiaq-afolabi?utm",
        },
        {
            name: "Emmanuel Olaosebikan",
            role: "Backend Developer",
            image: "assets/images/emmy.jpeg",
            linkedin: "https://www.linkedin.com/in/devemmy",
        },
        {
            name: "Abiola Aminat",
            role: "Content Writer",
            image: "assets/images/amenah.jpg",
            linkedin: "http://linkedin.com/in/abiola-aminat-6515561b4",
        },
        {
            name: "Gideon Olaniyi",
            role: "Graphics Designer",
            image: "assets/images/gidi.jpg",
            linkedin: "https://www.linkedin.com/in/gideon-olaniyi-0234b1226",
        },
        {
            name: "Joshua Salako",
            role: 'AI Engineer',
            image: 'assets/images/josh.jpg',
            linkedin: 'https://www.linkedin.com/in/salakojoshua'
        }
    ];
    return (
        <div className="md:pt-[100px] pt-[90px] sm:pt-[80px] pb-[50px] sm:pb-[30px]">
            <div className="wraper">
                <div className="grid justify-center">
                    <div className="col-span-6">
                        <div className="text-center mb-16 md:mb-12 col:mb-10">
                            <span
                                className="capitalize text-xl text-[#6e6e6e] font-heading-font font-normal underline  mb-2 inline-block">“<span
                                    className="text-[#F78914]">AMAZING TEAM</span>”</span>
                            <h2
                                className="text-6xl font-heading-font font-medium uppercase mt-5 col:mt-2 text-[#232323] sm:text-3xl col:text">
                                OUR Team Member</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-span-3 lg:col-span-3 md:col-span-6 col:col-span-12">
                            <div className="text-center relative transition-all z-10 group mb-7">
                                <div className="wpo-team-img">
                                    <img src={member.image}
                                        alt={member.name} className="group-hover:scale-[1.2] rounded-full" />
                                    <div
                                        className="absolute left-0 -top-[10%] w-full h-full flex justify-center flex-col
                                    rounded-[50%] transition-all translate-y-full pt-4 group-hover:translate-y-0 group-hover:top-[10%]">
                                        <div>
                                            <h2 className="font-heading-font font-normal text-3xl text-white lg:text-2xl xs:text-base">{member.name}</h2>
                                            <span className="font-base-font font-normal text-base text-white">{member.role}</span>
                                            <ul className="flex justify-center mt-4">
                                                <li><a target='_blank' rel="noreferrer" title='linkedln' href={member.linkedin}
                                                    className="inline-block w-10 h-10 leading-10 border border-white text-white rounded-full relative overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:transition-all after:-translate-x-full after:bg-[rgba(255,255,255,0.5)] hover:after:translate-x-full"><i
                                                        className="ti-linkedin" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-0 top-0 -z-10">
                                    <img src="assets/images/team/bg.png" alt="" />
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Team;