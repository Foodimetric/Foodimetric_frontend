import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Headers/Header';
import { Link } from 'react-router-dom';
import About from '../Components/sections/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import StatSection from '../Components/sections/Stat';


export const Home = () => {
    return (
        <>
            {/* <div className="preloader">
                <div className="vertical-centered-box">
                    <div className="content">
                        <div className="loader-circle"></div>
                        <div className="loader-line-mask">
                            <div className="loader-line"></div>
                        </div>
                        <img src="assets/images/preloader.png" alt="" />
                    </div>
                </div>
            </div> */}
            <Header />
            <main>
                <div className="relative mt-2">
                    <section className="bg-[#131313] w-full h-[900px]  lg:h-[680px]
                 md:h-[600px] sm:h-[500px]  relative z-[1] overflow-hidden">
                        <div className="w-full h-full absolute left-0 top-0">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className=""
                            >
                                <SwiperSlide className=''>
                                    <div className='slide-bg-image before:absolute before:left-0
                                        before:top-0 before:w-full before:h-full before:bg-[#040128] before:opacity-[0.6] pt-[35px] lg:pt-0 bg-hero-1'>
                                        <div className="gradient-overlay"></div>
                                        <div className="wraper">
                                            <div className="relative h-[900px] lg:h-[680px]  md:h-[600px] sm:h-[500px]">
                                                <div className="max-w-[720px] lg:w-[600px] md:w-full  absolute top-1/2 left-0 transform  -translate-y-1/2 pb-[175px] lg:pb-0">
                                                    <div data-swiper-parallax="200" className="wpo-hero-title-top">
                                                        <p className="text-[25px] col:text-[16px] text-white font-base-font capitalize mb-[30px] font-normal tracking-[2px]">
                                                            “<span className="text-[#F78914]">100% ACCURATE BMI RESULT</span>”
                                                        </p>
                                                    </div>
                                                    <div data-swiper-parallax="300" className="slide-title">
                                                        <h2 className="text-[75px] font-heading-font font-normal uppercase leading-[90px] mt-[10px] mb-[25px]
                        lg:text-[50px] md:text-[40px] md:leading-[55px] col:text-[35px] col:leading-[35px] text-white col:mb-[20px]">
                                                            Carry out BMI <span className="text-[#F78914]">And</span> Other Anthropometric Calculations.
                                                        </h2>
                                                    </div>
                                                    <div data-swiper-parallax="400" className="slide-text">
                                                        <p className="text-[22px] text-[#e2e2e2] font-base-font leading-[35px] mb-[40px] 
                        md:text-[18px] col:leading-[25px] col:mb-[30px]">
                                                            Say goodbye to manual calculations. Our accurate Anthropometric calculator gives you instant insights into your health.
                                                        </p>
                                                    </div>
                                                    <div data-swiper-parallax="500" className="slide-btn">
                                                        <Link to="/login" className="btn theme-btn bg-[#147e03]">Explore more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" slide-bg-image before:absolute before:left-0
                                        before:top-0 before:w-full before:h-full before:bg-[#040128] before:opacity-[0.6] pt-[35px] lg:pt-0 bg-hero"
                                    >
                                        <div className="gradient-overlay"></div>
                                        <div className="wraper">
                                            <div className="relative h-[900px] lg:h-[680px]  md:h-[600px] sm:h-[500px]">
                                                <div
                                                    className="max-w-[720px] lg:w-[600px] md:w-full  absolute top-1/2 left-0 transform  -translate-y-1/2 pb-[175px] lg:pb-0">

                                                    <div data-swiper-parallax="200" className="wpo-hero-title-top">
                                                        <p className="text-[25px] col:text-[16px] text-white font-base-font capitalize
                                                    mb-[30px] font-normal tracking-[2px]">“<span
                                                                className="text-[#F78914]">GET ACCURATE RESULT</span>”</p>
                                                    </div>
                                                    <div data-swiper-parallax="300" className="slide-title">
                                                        <h2 className="text-[75px] font-heading-font font-normal uppercase leading-[90px] mt-[10px] mb-[25px]
                                                     lg:text-[50px] md:text-[40px] md:leading-[55px] col:text-[35px]
                                                     col:leading-[35px] text-white col:mb-[20px]">  Discover Your Nutrient Intake,
                                                            <span className="text-[#F78914]">Search Now!</span>.</h2>
                                                    </div>
                                                    <div data-swiper-parallax="400" className="slide-text">
                                                        <p className="text-[22px] text-[#e2e2e2] font-base-font
                                                    leading-[35px]
                                                     mb-[40px] 
                                                    md:text-[18px] col:leading-[25px] 
                                                    col:mb-[30px]">
                                                            Say NO to manual calorie calculations. Explore a vast database of Nigerian and West African foods to track your nutritional intake effortlessly.</p>
                                                    </div>

                                                    <div data-swiper-parallax="500" className="slide-btn">
                                                        <Link to="/about" className="btn theme-btn bg-[#147e03]">
                                                            Explore more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" slide-bg-image before:absolute before:left-0
                                        before:top-0 before:w-full before:h-full before:bg-[#040128] before:opacity-[0.6] pt-[35px] lg:pt-0 bg-hero-3"
                                    >
                                        <div className="gradient-overlay"></div>
                                        <div className="wraper">
                                            <div className="relative h-[900px] lg:h-[680px]  md:h-[600px] sm:h-[500px]">
                                                <div
                                                    className="max-w-[720px] lg:w-[600px] md:w-full  absolute top-1/2 left-0 transform  -translate-y-1/2 pb-[175px] lg:pb-0">

                                                    <div data-swiper-parallax="200" className="wpo-hero-title-top">
                                                        <p className="text-[25px] col:text-[16px] text-white font-base-font capitalize
                                                    mb-[30px] font-normal tracking-[2px]">“<span
                                                                className="text-[#F78914]">GET ACCESS TO ARTICLES</span>”</p>
                                                    </div>
                                                    <div data-swiper-parallax="300" className="slide-title">
                                                        <h2 className="text-[75px] font-heading-font font-normal uppercase leading-[90px] mt-[10px] mb-[25px]
                                                     lg:text-[50px] md:text-[40px] md:leading-[55px] col:text-[35px]
                                                     col:leading-[35px] text-white col:mb-[20px]">    Stay Informed with the Latest in Nutrition,
                                                            <span className="text-[#F78914]">Read Our Articles!</span>.</h2>
                                                    </div>
                                                    <div data-swiper-parallax="400" className="slide-text">
                                                        <p className="text-[22px] text-[#e2e2e2] font-base-font
                                                    leading-[35px]
                                                     mb-[40px] 
                                                    md:text-[18px] col:leading-[25px] 
                                                    col:mb-[30px]">
                                                            Don't miss out on the latest research and insights in nutrition. Our regularly updated articles provide you with the knowledge you need to make informed dietary choices. Stay ahead with tips, trends, and scientifically-backed information.</p>
                                                    </div>

                                                    <div data-swiper-parallax="500" className="slide-btn">
                                                        <Link to="/about" className="btn theme-btn bg-[#147e03]">
                                                            Explore more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                </div>
                <About padding={'90px'} />
                <StatSection />
                <section className="pt-[120px] md:pt-[90px] sm:pt-[80px] pb-[90px] md:pb-[60px] sm:pb-[50px]">
                    <div className="wraper">
                        <div className="grid justify-center">
                            <div className="col-span-6">
                                <div className="text-center mb-16 md:mb-12 col:mb-10">
                                    <h2
                                        className="text-6xl font-heading-font font-medium uppercase mt-5 col:mt-2 text-[#232323] sm:text-3xl col:text">
                                        LATEST ARTICLES</h2>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-4">
                            <div className="md:col-span-3 col-span-6 col:col-span-12">
                                <div className="p-7 bg-white rounded-[350px] shadow-[4px_8px_20px_#eaeced] text-center mb-7 group">
                                    <div className="overflow-hidden rounded-full">
                                        <img src="assets/images/service/img-1.jpg" alt=""
                                            className="w-full rounded-full transform-all scale-100 transition group-hover:scale-110" />
                                    </div>
                                    <div>
                                        {/* <div className="w-[120px] h-[120px] leading-[120px] flex items-center justify-center bg-white shadow-[4px_8px_20px_rgba(35,35,35,0.1)]
                                rounded-full mx-auto relative mt-[-60px] mb-[20px] text-center">
                                            <img src="assets/images/service/icon-1.svg" alt="" className="max-w-[55px]" />
                                        </div> */}
                                        <h4 className="font-normal text-xl text-center mb-5 sm:text-lg font-heading-font">
                                            Agriculture Products</h4>
                                        <a href="service-single.html" className="block w-16 h-16 leading-[64px] border border-[#F78914] bg-transparent
                                mx-auto mt-2 rounded-[50%] transition-all hover:bg-[#F78914] hover:text-white">
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-6 col:col-span-12">
                                <div className="p-7 bg-white rounded-[350px] shadow-[4px_8px_20px_#eaeced] text-center mb-7 group">
                                    <div className="overflow-hidden rounded-full">
                                        <img src="assets/images/service/img-2.jpg" alt=""
                                            className="w-full rounded-full transform-all scale-100 transition group-hover:scale-110" />
                                    </div>
                                    <div>
                                        {/* <div className="w-[120px] h-[120px] leading-[120px] flex items-center justify-center bg-white shadow-[4px_8px_20px_rgba(35,35,35,0.1)]
                                rounded-full mx-auto relative mt-[-60px] mb-[20px] text-center">
                                            <img src="assets/images/service/icon-2.svg" alt="" className="max-w-[55px]" />
                                        </div> */}
                                        <h4 className="font-normal text-xl text-center mb-5 sm:text-lg font-heading-font">Dairy
                                            Products</h4>
                                        <a href="service-single.html" className="block w-16 h-16 leading-[64px] border border-[#F78914] bg-transparent
                                mx-auto mt-2 rounded-[50%] transition-all hover:bg-[#F78914] hover:text-white">
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-6 col:col-span-12">
                                <div className="p-7 bg-white rounded-[350px] shadow-[4px_8px_20px_#eaeced] text-center mb-7 group">
                                    <div className="overflow-hidden rounded-full">
                                        <img src="assets/images/service/img-3.jpg" alt=""
                                            className="w-full rounded-full transform-all scale-100 transition group-hover:scale-110" />
                                    </div>
                                    <div>
                                        {/* <div className="w-[120px] h-[120px] leading-[120px] flex items-center justify-center bg-white shadow-[4px_8px_20px_rgba(35,35,35,0.1)]
                                rounded-full mx-auto relative mt-[-60px] mb-[20px] text-center">
                                            <img src="assets/images/service/icon-3.svg" alt="" className="max-w-[55px]" />
                                        </div> */}
                                        <h4 className="font-normal text-xl text-center mb-5 sm:text-lg font-heading-font">Organic
                                            Fruits</h4>
                                        <a href="service-single.html" className="block w-16 h-16 leading-[64px] border border-[#F78914] bg-transparent
                                mx-auto mt-2 rounded-[50%] transition-all hover:bg-[#F78914] hover:text-white">
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-6 col:col-span-12">
                                <div className="p-7 bg-white rounded-[350px] shadow-[4px_8px_20px_#eaeced] text-center mb-7 group">
                                    <div className="overflow-hidden rounded-full">
                                        <img src="assets/images/service/img-4.jpg" alt=""
                                            className="w-full rounded-full transform-all scale-100 transition group-hover:scale-110" />
                                    </div>
                                    <div>
                                        {/* <div className="w-[120px] h-[120px] leading-[120px] flex items-center justify-center bg-white shadow-[4px_8px_20px_rgba(35,35,35,0.1)]
                                rounded-full mx-auto relative mt-[-60px] mb-[20px] text-center">
                                            <img src="assets/images/service/icon-4.svg" alt="" className="max-w-[55px]" />
                                        </div> */}
                                        <h4 className="font-normal text-xl text-center mb-5 sm:text-lg font-heading-font">Fresh
                                            Vegetables</h4>
                                        <a href="service-single.html" className="block w-16 h-16 leading-[64px] border border-[#F78914] bg-transparent
                                mx-auto mt-2 rounded-[50%] transition-all hover:bg-[#F78914] hover:text-white">
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='partner'
                    className="relative py-[60px] bg-no-repeat bg-center bg-cover z-10 
        before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#8AC224] before:opacity-[0.9] before:-z-10 ">
                    <h2 className="hidden">hidden</h2>
                    <div className="wraper">
                        <div className="partners-slider owl-carousel owl-loaded owl-drag">
                            <div className='owl-stage-outer'>
                                <div className='owl-stage md:flex items-center justify-between block'>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/1.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/2.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/3.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/4.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/5.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="h-[120px] flex items-center justify-center">
                                        <div>
                                            <img src="assets/images/partner/2.png" alt="" className="mx-auto w-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='testimonial'
                    className="py-[120px] md:py-[90px] sm:py-[80px] bg-no-repeat bg-center bg-cover relative z-10">
                    <div className="absolute left-[6%] top-[18%] md:hidden">
                        <img src="assets/images/testimonial/vector.png" alt="" className="xl:max-[60%]" />
                    </div>
                    <div className="wraper">
                        <div className="grid justify-center">
                            <div className="col-span-8">
                                <div className="text-center mb-16 md:mb-12 col:mb-10">
                                    <span
                                        className="capitalize text-xl text-[#6e6e6e] font-heading-font font-normal underline  mb-2 inline-block">“<span
                                            className="text-[#F78914]">USERS TESTIMONIAL</span>”</span>
                                    <h2
                                        className="text-6xl font-heading-font font-medium uppercase mt-5 col:mt-2 text-[#232323] sm:text-3xl col:text">
                                        happy users</h2>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className=""
                        >
                            <SwiperSlide className='px-12'>
                                <div className="md:flex bg-[#F78914] rounded-[20px] items-center block">
                                    <div className="basis-[28%]">
                                        <img src="assets/images/testimonial/img-1.jpg" alt=""
                                            className="rounded-tl-[20px] rounded-bl-[20px] md:rounded-bl-[0] md:rounded-tr-[20px] md:h-[400px] md:object-cover" />
                                    </div>
                                    <div
                                        className="p-[60px] basis-[72%] relative z-10 xl:p-5 md:py-7 sm:p-[20px_10px]  before:absolute 
                                            before:left-1/2 before:top-1/2 before:content-['\f10a'] before:font-['Flaticon'] before:-z-10
                                            before:text-[260px] before:text-white before:rotate-[180deg] before:transform-[-50%_-50%] 
                                            before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-[.1] sm:before:top-[40%] sm:before:text-[200px]">
                                        <p className="font-heading-font font-normal md:text-2xl mb-6 relative text-white text-lg lg:mb-4">“It uses a dictionary of over 200 Latin words, combined with handful the model
                                            sentence structures, to generate lorem ipsum which looks reasonable. The generated
                                            lorem ipsum is therefore always free from repetition sentence structures, to
                                            generate lorem ipsum which looks..</p>
                                        <h2 className="font-normal md:text-4xl text-white text-3xl">Modern Sater</h2>
                                        <span className="font-normal text-base text-white">CEO of Digital Studio</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='px-12'>
                                <div className="md:flex bg-[#F78914] rounded-[20px] items-center block">
                                    <div className="basis-[28%]">
                                        <img src="assets/images/testimonial/img-2.jpg" alt=""
                                            className="rounded-tl-[20px] rounded-bl-[20px] md:rounded-bl-[0] md:rounded-tr-[20px] md:h-[400px] md:object-cover" />
                                    </div>
                                    <div
                                        className="p-[60px] basis-[72%] relative z-10 xl:p-5 md:py-7 sm:p-[20px_10px] before:absolute 
                        before:left-1/2 before:top-1/2 before:content-['\f10a'] before:font-['Flaticon'] before:-z-10
                         before:text-[260px] before:text-white before:rotate-[180deg] before:transform-[-50%_-50%] 
                         before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-[.1] sm:before:top-[40%] sm:before:text-[200px]">
                                        <p
                                            className="font-heading-font font-normal md:text-2xl mb-6 relative text-white text-lg lg:mb-4">
                                            “It uses a dictionary of over 200 Latin words, combined with handful the model
                                            sentence structures, to generate lorem ipsum which looks reasonable. The generated
                                            lorem ipsum is therefore always free from repetition sentence structures, to
                                            generate lorem ipsum which looks..</p>
                                        <h2 className="font-normal md:text-4xl text-white text-3xl">Marry Jenefer</h2>
                                        <span className="font-normal text-base text-white">CEO of Digital Studio</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='px-12'>
                                <div className="md:flex bg-[#F78914] rounded-[20px] items-center block">
                                    <div className="basis-[28%]">
                                        <img src="assets/images/testimonial/img-3.jpg" alt=""
                                            className="rounded-tl-[20px] rounded-bl-[20px] md:rounded-bl-[0] md:rounded-tr-[20px] md:h-[400px] md:object-cover" />
                                    </div>
                                    <div
                                        className="p-[60px] basis-[72%] relative z-10 xl:p-5 md:py-7 sm:p-[20px_10px] before:absolute 
                                        before:left-1/2 before:top-1/2 before:content-['\f10a'] before:font-['Flaticon'] before:-z-10
                                        before:text-[260px] before:text-white before:rotate-[180deg] before:transform-[-50%_-50%] 
                                        before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-[.1] sm:before:top-[40%] sm:before:text-[200px]">
                                        <p
                                            className="font-heading-font font-normal md:text-2xl mb-6 relative text-white lg:mb-4 ">
                                            “It uses a dictionary of over 200 Latin words, combined with handful the model
                                            sentence structures, to generate lorem ipsum which looks reasonable. The generated
                                            lorem ipsum is therefore always free from repetition sentence structures, to
                                            generate lorem ipsum which looks..</p>
                                        <h2 className="font-normal md:text-4xl text-white text-3xl">William Robert</h2>
                                        <span className="font-normal text-base text-white">CEO of Digital Studio</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}