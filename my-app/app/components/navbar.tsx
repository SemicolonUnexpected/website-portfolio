import Image from "next/image";
import MenuBurger from "../../public/assets/MenuBurger.svg";
import Logo from "../../public/assets/Logo.svg";

const navLinks = [
    {name: "Home"},
    {name: "Recent"},
    {name: "Archive"},
    {name: "Contact"}
];

export function Navbar() {
    return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={32}/> 

            <div className="hidden lg:flex pl-[80px] gap-x-[56px]">
                {navLinks.map((item, index) => (
                    <p className="text-[#000]" key={index}>
                        {item.name}
                    </p>
                ))}
            </div>
        </div>

        <div className="flex gap-x-5">
            <div>
                <Image src={MenuBurger} alt="Menu button" width={32}/>
            </div>
        </div>
    </nav>
    );
}
