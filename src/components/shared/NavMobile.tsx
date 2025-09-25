import { Menu } from "lucide-react";
import React from "react";
import {
    Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useRouter } from "next/navigation";

interface INav {
  label: string;
  path: string;
}

interface Props {
  navItems: INav[];
}

export default function NavMobile({ navItems }: Props) {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button">
          <Menu className="size-6 md:hidden cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle className="text-blue-600 font-bold text-xl">
            Menu
          </SheetTitle>
        </SheetHeader>
        <ul className="mt-6 flex flex-col px-5 gap-4 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
