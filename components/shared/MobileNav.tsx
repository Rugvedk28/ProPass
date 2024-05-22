import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
  

const MobileNav = () => {
  return (
                <nav className="md:hidden">
                    <Sheet>
            <SheetTrigger className="align-middle">
                <Image src={"/assets/icons/menu.svg"} alt="menu" width={24} height={24} className="cursor-pointer"></Image>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image src={"/assets/icons/propass.png"} alt="logo" width={70} height={70}></Image>
            </SheetContent>
            </Sheet>

    </nav>
  )
}

export default MobileNav