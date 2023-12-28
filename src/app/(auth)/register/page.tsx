import Button from "@/components/common/Button/Button";
import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

function Register() {
    return (
        <>
            <div>
                <form className="w-[400px] bg-white p-5 rounded-lg">
                    <div>
                        <Image
                            className="w-[70px] mx-auto block mb-3"
                            src={logoImg}
                            alt=""
                        />
                        <h4 className="text-center text-primary text-3xl mb-5">
                            Create your account
                        </h4>
                    </div>
                    <div className="border border-slate-300 rounded-md mb-5">
                        <input
                            className="w-full outline-none p-3 rounded-md"
                            type="text"
                            placeholder="User name"
                            name="UserName"
                        />
                    </div>
                    <div className="border border-slate-300 rounded-md mb-5">
                        <input
                            className="w-full outline-none p-3 rounded-md"
                            type="text"
                            placeholder="Email address"
                            name="Email"
                        />
                    </div>
                    <div className="border border-slate-300 rounded-md mb-5">
                        <input
                            className="w-full outline-none p-3 rounded-md"
                            type="password"
                            placeholder="Password"
                            name="Password"
                        />
                    </div>
                    <div className="border border-slate-300 rounded-md mb-5">
                        <input
                            className="w-full outline-none p-3 rounded-md"
                            type="password"
                            placeholder="Confirm password"
                            name="ConfirmPassword"
                        />
                    </div>
                    <Button className="w-full" type="primary" size="medium">
                        Create account
                    </Button>

                    <div className="flex items-center justify-center pt-4 mt-4 border-t border-t-gray-300">
                        <p>
                            Already have an account? &nbsp;
                            <Link className="text-primary" href="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
