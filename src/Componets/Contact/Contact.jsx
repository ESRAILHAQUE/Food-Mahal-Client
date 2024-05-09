function Contact() {
   return (
        <section className="py-16  m-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center">Contact Us</h2>
                    <p className="text-lg lg:text-xl text-center mb-8">Have questions, feedback, or need assistance? Don't hesitate to reach out to us!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-base-200 p-6 rounded-lg">
                            <h3 className="text-xl lg:text-2xl font-bold mb-4">Send us a Message</h3>
                            <form className="space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-lg font-medium">Your Name</label>
                                    <input type="text" id="name" name="name" className="input input-bordered" placeholder="Enter your name" required />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-lg font-medium">Your Email</label>
                                    <input type="email" id="email" name="email" className="input input-bordered" placeholder="Enter your email" required />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-lg font-medium">Your Message</label>
                                    <textarea id="message" name="message" rows="5" className="textarea textarea-bordered" placeholder="Enter your message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                        <div className="bg-base-200 p-6 rounded-lg">
                            <h3 className="text-xl lg:text-2xl font-bold mb-4">Connect with Us</h3>
                            <p className="text-lg">Feel free to connect with us on social media for the latest updates, travel inspiration, and more!</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-3xl text-blue-500 hover:text-blue-700">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a href="#" className="text-3xl text-blue-500 hover:text-blue-700">
                                    <i className="fab fa-twitter-square"></i>
                                </a>
                                <a href="#" className="text-3xl text-blue-500 hover:text-blue-700">
                                    <i className="fab fa-instagram-square"></i>
                                </a>
                                <a href="#" className="text-3xl text-blue-500 hover:text-blue-700">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default Contact