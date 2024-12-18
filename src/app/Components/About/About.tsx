export default function AboutSection() {
    return (
        <div className="my-12 mx-8 mb-20">
            <h1 className="text-center text-5xl font-poppins font-bold">About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
                {/* Text Section */}
                <section>
                    <p className="text-lg md:text-xl font-roboto">
                        Located in Nairobi at Lucky Summer, we offer top-notch PlayStation gaming, 
                        movie pre-orders, and essential electronics like chargers, earphones, and more. 
                        Join us for thrilling tournaments, great deals, and the ultimate entertainment experience!
                    </p>
                </section>

                {/* Map Section */}
                <section className="h-96 rounded-[8px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8601.033478295692!2d36.89599746356365!3d-1.239263444974827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15a559874399%3A0xaf90d9a01f75ced0!2sLucky%20Summer%2C%20Nairobi!5e1!3m2!1sen!2ske!4v1673455187135!5m2!1sen!2ske"
                        className="border-0 w-full h-96 md:h-full rounded-[8px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lucky Summer, Nairobi Map"
                    ></iframe>
                </section>
            </div>
        </div>
    );
}
