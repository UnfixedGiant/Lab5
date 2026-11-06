"use client"
import Link from "next/link"



const CustomRegisterForm = () => {
    return (
        <>
            <form className="mt-4">
                {" "}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="John Smith"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="**********"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="**********"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">
                        Create Account
                    </button>
                </div>
            </form>
            <div className="divider">OR</div>

            <p className="text-center">
                Alread&apos;y have an account? {" "}
                <Link href="/login" className="link link-primary">
                    Sign In
                </Link>
            </p>
        </>
    )
}


export default CustomRegisterForm