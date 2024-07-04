import { useRef } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { toast } from "react-toastify";

export default function Contactus() {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm("service_sik7o5o", "template_hj64nmq", form.current, {
    //             publicKey: "8RE-_NcXCSzufx5Q7",
    //         })
    //         .then(
    //             () => {
    //                 toast.success("Email Sent Successfully");
    //             },
    //             (error) => {
    //                 console.log("FAILED...", error.text);
    //             }
    //         );
    // };
    return (
        <>
            <Header />
            <div className="m-4">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                        TechNest
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="m-10 order-1 ">
                    <form
                        className="flex flex-col w-full text-base"
                        ref={form}
                        // onSubmit={sendEmail}
                    >
                        <label className=" text-1xl font-bold mb-5">
                            Name:
                        </label>
                        <input
                            className="border mb-5 p-2"
                            type="text"
                            name="user_name"
                        />
                        <label className=" text-1xl font-bold mb-5 ">
                            Email:
                        </label>
                        <input
                            className="border mb-5 p-2"
                            type="email"
                            name="user_email"
                        />
                        <label className=" text-1xl font-bold mb-5">
                            Message:
                        </label>
                        <textarea className="border mb-5  p-5" name="message" />
                        <input
                            className=" bg-orange-600 cursor-pointer p-2 w-1/2 hover:bg-black text-white"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
                <div>
                    <div className="h-full pr-6  m-10">
                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                            Welcome to Tech Nest's Contact Us page! We value
                            your feedback, inquiries, and suggestions. Whether
                            you have a question about our products, need
                            assistance with an order, or simply want to say
                            hello, we're here to help.
                        </p>
                        <ul className="mb-6 md:mb-0">
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                    </svg>
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Our Address
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        F9 Sector, Islamabad
                                    </p>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        Pakistan, TN
                                    </p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                                    </svg>
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Contact
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        Mobile: +(92)-3097290900
                                    </p>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        Mail: nabeeljaved153@gmail.com
                                    </p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                        <path d="M12 7v5l3 3"></path>
                                    </svg>
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Working hours
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        Monday - Friday: 08:00 - 17:00
                                    </p>
                                    <p className="text-gray-600 dark:text-slate-400">
                                        Saturday &amp; Sunday: 08:00 - 12:00
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
