import Link from "next/link"

const UrgentDonation = () => {
    return (
        <section className=" bg-donation-bg sm:py-52 py-28 bg-no-repeat">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="bg-white max-w-29 w-full px-10 py-14 rounded-lg text-center mx-auto">
                    <h3 className="sm:text-24 text-18 font-bold mb-5">
                        Child needs to go immediate medical surgery, Help.
                    </h3>
                    <p className="text-muted sm:text-16 text-14 mb-7">
                        You can relay on our amazing features list and also our customer services will be great experience for you without doubt
                    </p>
                    <Link href="#" className="bg-gradient-to-r from-primary to-secondary px-7 border text-16 text-white border-transparent py-4 rounded hover:from-transparent hover:to-transparent  hover:border-primary hover:text-primary">
                        Urgent Donate
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default UrgentDonation;