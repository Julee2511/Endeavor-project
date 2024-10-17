import Link from "next/link"

const FormPart = () => {
    return (
        <>
            <div className="bg-grey py-5 px-8 rounded border border-border mb-8">
                <p className="mb-0 text-16 text-muted">
                    <span className="text-midnight_text">Notice:</span> Test mode is enabled. While in test mode no live donations are processed.
                </p>
            </div>
            <div className="bg-grey px-8 py-14 rounded border border-border">
                <div className="border border-border py-5 px-10 rounded-md mb-11">
                    <p className="text-14 text-muted">
                        The maximum custom donation amount for this form is $999,999.99
                    </p>
                </div>
                <form className="">
                    <div className="flex items-center mb-4">
                        <label htmlFor="amount" className="rounded-s-lg bg-white border border-border px-4 py-5 text-16 ">
                            $
                        </label>
                        <input type="number" name="amount" id="amount" placeholder="999,999.99" className="px-4 py-5 border rounded-e-lg text-16" />
                    </div>
                    <p className="text-16 text-muted">
                        Custom amount
                    </p>
                    <div className="mb-7">
                        <h5 className="text-16 font-medium mb-4 pb-3 border-b border-border">
                            Select Payment Method
                        </h5>
                        <div className="flex gap-4">
                            <div className="flex gap-2">
                                <input type="radio" name="donation" id="Test" />
                                <label htmlFor="Test" className="text-muted">Test donation</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="donation" id="Offline" />
                                <label htmlFor="Offline" className="text-muted">Offline Donation</label>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h5 className="text-16 font-medium mb-4 pb-3 border-b border-border">
                            Personal Info
                        </h5>
                        <div className="grid grid-cols-2 gap-7 mb-7">
                            <div className="flex flex-col">
                                <label htmlFor="Fname" className="text-16 text-muted mb-4">First Name *</label>
                                <input type="text" placeholder="First Name" className="py-5 px-4 border rounded-md border-border text-16" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Lname" className="text-16 text-muted mb-4">Last Name</label>
                                <input type="text" placeholder="Last Name" className="py-5 px-4 border rounded-md border-border text-16" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label htmlFor="Email" className="text-16 text-muted mb-4">Email Address *</label>
                            <input type="text" placeholder="Email Address" className="py-5 px-4 border rounded-md border-border text-16" />
                        </div>
                        <div className="flex justify-between items-center mb-7">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="account" name="account" />
                                <label htmlFor="account" className="text-muted text-16"> Create an account</label>
                            </div>
                            <div className="">
                                <p className="text-16 text-muted">
                                    Already have an account? <Link href="#" className="text-midnight_text hover:text-primary">Login</Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label htmlFor="amount" className="rounded-s-lg bg-white border border-border px-4 py-5 text-16 ">
                                Donation Total:
                            </label>
                            <input type="number" name="amount" id="amount" placeholder="$2,001,230.00" className="px-4 py-5 text-16 border rounded-e-lg placeholder:text-primary placeholder:text-opacity-30" />
                        </div>
                        <button type="submit" className="text-white text-14 bg-gradient-to-r from-primary to-secondary font-semibold border border-transparent py-4 px-7 rounded-md hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent">Donate now</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormPart;