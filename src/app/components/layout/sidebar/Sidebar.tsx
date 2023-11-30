import { headers } from 'next/headers';
import { Sun, UsersRound, PhoneCall, MessagesSquare, Settings  } from "lucide-react";
import Image from "next/image";
import cn from "clsx";
import styles from "./Sidebar.module.scss"
import Link from "next/link";
import { MENU } from './sidebar.data';
import { getServerPathName } from '@/app/serverActions/get-pathname';

export function Sidebar() {
  const pathname = getServerPathName()


return(
   <aside className={styles.sidebar}>
    <Image src="/logo.svg" alt="" width={50} height={50}/>
      <div>
        {MENU.map(item => (
          <Link href={item.url} key={item.url} className={
            cn({
              [styles.active] : pathname === item.url,
            })
          }>
          <item.icon size={27} />
          </Link>
        ))}

  </div>
  <Sun/>
</aside>
)
}