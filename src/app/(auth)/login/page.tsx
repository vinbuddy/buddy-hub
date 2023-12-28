import Button from "@/components/common/Button/Button";

import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

function Login() {
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
                            Login to Buddy Hub
                        </h4>
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
                    <Button className="w-full" type="primary" size="medium">
                        Login
                    </Button>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-t-gray-300">
                        <Link className="text-gray-600" href="/forgot">
                            Forgot password?
                        </Link>
                        <Link className="text-primary" href="/register">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
