import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
HomeIcon, 
SearchIcon, 
BadgeCheckIcon,
CollectionIcon,
LightningBoltIcon,
UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flexs-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
