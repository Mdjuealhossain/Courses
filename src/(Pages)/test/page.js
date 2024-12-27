"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";

import PhoneNumberInput from "@/components/PhoneNumber";
import Button from "@/components/Button";
import { tabs } from "@/app/staticData/data";
import Modal from "@/components/Modal";
import DatePicker from "@/components/DatePicker";

const LetsTalk = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            email: "",
            company: "",
            stuffNumber: "",
            website: "",
            descrition: "",
            dateTime: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, "Must be 4 characters or more").required("The field is required."),
            number: Yup.string()
                .matches(/^[0-9]{13}$/, "Phone number must be exactly 10 digits")
                .required("Phone number is required"),
            email: Yup.string().email("Invalid email address").required("The field is required."),
        }),
        onSubmit: (values, { resetForm }) => {
            setIsSubmit(true);
            setTimeout(() => {
                setIsSuccess(true);
            }, 200);
            resetForm();
            console.log("Form Values:", values); // Logging values to the console
        },
    });

    // sweet modal
    const handleClose = () => {
        setIsSubmit(false);
        setIsSuccess(false);
        setTab(0);
    };

    return (
        <>
            <div className=" grid md:grid-cols-2 grid-cols-1 md:space-x-4">
                <div className=" col-span-1 mb-6 md:mb-0">
                    <h6 className=" text-H6 text-center my-6 font-bold">Trusted by</h6>
                    <div className=" grid grid-cols-4 gap-x-4 gap-y-8 h-370 md:h-auto overflow-y-auto md:overflow-hidden scrollbar">
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/1.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/2.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/3.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/4.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/5.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/6.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/7.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/8.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/9.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/10.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/11.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/12.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/13.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/14.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/15.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/16.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/17.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/18.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/19.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/20.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/21.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/22.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/23.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/24.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/25.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/26.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/27.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/28.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/29.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/30.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/31.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/32.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/33.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/34.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/35.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/36.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/37.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/38.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/39.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/40.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/41.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/42.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/43.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/44.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/45.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/46.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/47.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/48.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/49.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/50.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/51.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                        <div className="flex items-center  justify-center md:h-8 h-6">
                            <Image src="/assets/images/client/52.webp" alt="Slide 1" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
                <div className=" col-span-1 md:px-8 md:py-5 p-4 mt-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-H6 text-center font-bold mb-2">I’m Looking For</h3>
                    <p className=" text-subtitle2 mb-2 text-center">{"[ Please select your area of interest below ]"}</p>
                    <div className={`${isSubmit ? "hidden" : "block"}`}>
                        <div className=" grid grid-cols-2 gap-x-2 gap-y-4 mb-4">
                            {tabs.map((tabData) => (
                                <div key={tabData.id} onClick={() => setTab(tabData.id)} className={`group col-span-1  md:px-4 md:pt-2 p-2 relative rounded-lg cursor-pointer ${tab == tabData.id ? "bg-success_main text-white" : "bg-secondary_bg text-black"}`}>
                                    <div className=" flex items-center gap-2 whitespace-nowrap">
                                        <p className=" text-subtitle2 font-medium">{tabData.label}</p>
                                        <FaCheck size={12} className={`text-white ${tab == tabData.id ? " opacity-100" : " opacity-0"}`} />
                                    </div>
                                    <div className={` hidden md:flex absolute bottom-1 ${tab !== tabData.id ? "bg-success_main" : "bg-transparent"} h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-3/4`}></div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={formik.handleSubmit} className={` ${tab > 0 ? "opacity-100" : " opacity-40"}`}>
                            <div className={`grid grid-cols-2 gap-x-2 gap-y-6 mb-10 `}>
                                <div className=" col-span-2 flex flex-col ">
                                    <label htmlFor="name" className="font-semibold mb-2">
                                        Your name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        readOnly={tab > 0 ? false : true}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        placeholder="Your Full name"
                                        className={` ${tab > 0 ? "focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input" : "focus:ring-none focus:ring-none"} px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent`}
                                    />
                                    {formik.touched.name && formik.errors.name && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.name}</div>}
                                </div>

                                <div className=" col-span-1 flex flex-col ">
                                    <label htmlFor="email" className="font-semibold mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        readOnly={tab > 0 ? false : true}
                                        placeholder="Your Email Address"
                                        className={` ${tab > 0 ? "focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input" : "focus:ring-none focus:ring-none"} px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent`}
                                    />
                                    {formik.touched.email && formik.errors.name ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.email}</div> : null}
                                </div>
                                <div className=" col-span-1 flex flex-col justify-between ">
                                    <PhoneNumberInput readOnly={tab > 0 ? false : true} name="number" label={" Mobile phone*"} value={formik.values.number} onChange={(number) => formik.setFieldValue("number", number)} />
                                    {formik.touched.number && formik.errors.name ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.number}</div> : null}
                                </div>
                                <div className=" col-span-1 flex flex-col ">
                                    <label htmlFor="company" className="font-semibold mb-2">
                                        Company name
                                    </label>
                                    <input
                                        name="company"
                                        type="text"
                                        placeholder="Company Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.company}
                                        readOnly={tab > 0 ? false : true}
                                        className={` ${tab > 0 ? "focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input" : "focus:ring-none focus:ring-none"} px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent`}
                                    />
                                </div>
                                <div className=" col-span-1 flex flex-col ">
                                    <label htmlFor="website" className="font-semibold mb-2">
                                        Company website
                                    </label>
                                    <input
                                        name="website"
                                        type="text"
                                        readOnly={tab > 0 ? false : true}
                                        onChange={formik.handleChange}
                                        value={formik.values.website}
                                        placeholder="Company website"
                                        className={` ${tab > 0 ? "focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input" : "focus:ring-none focus:ring-none"} px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent`}
                                    />
                                </div>

                                <div className=" col-span-2 ">
                                    <DatePicker label={"Date and Time"} onChange={(value) => formik.setFieldValue("dateTime", value)} value={formik.values.dateTime} inputClass={`custom-input !px-4  px-4 py-2 !bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main `} />
                                </div>

                                <div className=" col-span-2 flex flex-col ">
                                    <label htmlFor="requirements" className="font-semibold mb-2">
                                        Briefly describe your requirements
                                    </label>
                                    <textarea
                                        readOnly={tab > 0 ? false : true}
                                        name="descrition"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.descrition}
                                        placeholder="Start Typeing here"
                                        className={` ${tab > 0 ? "focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input" : "focus:ring-none focus:ring-none"} px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent `}
                                    />
                                    {formik.touched.descrition && formik.errors.descrition ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.descrition}</div> : null}
                                </div>
                            </div>
                            <button type="submit" disabled={tab > 0 ? false : true} className={`${tab > 0 && " hover-bg-left-to-right hover:text-black"} capitalize bg-black text-white cursor-pointer md:px-6 md:py-10px px-6 py-2 transition-all duration-500`}>
                                <span>Submit & Schedule a Metting</span>
                            </button>
                        </form>
                    </div>
                    {isSubmit && (
                        <>
                            <div className=" flex items-center justify-center h-3/4">
                                <div className=" bg-white shadow-lg mx-4 md:mx-0 flex flex-col p-6 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" className="mx-auto">
                                        <circle cx="50" cy="50" r="45" className={`circle ${isSuccess ? "filled" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"}></circle>
                                        <path d="M 30 50 L 45 65 L 70 35" className={`checkmark ${isSuccess ? "show" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"} fill="none" strokeWidth="5" strokeLinecap="round"></path>
                                    </svg>
                                    <div className="my-4 space-y-4">
                                        <h5 className="  text-H5 font-semibold text-center">Successfully Submitted</h5>
                                        <p className="text-center text-subtitle2">Your requirement has been submitted successfully. Thank you for considering WiztecBD with service.</p>
                                        <p className="text-center text-subtitle2 font-semibold">We will email you a quotation.</p>
                                    </div>
                                    <div className=" flex items-center justify-center">
                                        <button onClick={handleClose} className=" px-6 py-2 bg-black text-white text-subtitle2 leading-4">
                                            <span> Ok !</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default LetsTalk;
