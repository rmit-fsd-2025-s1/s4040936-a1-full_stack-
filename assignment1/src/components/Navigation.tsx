import Link from "next/link";

export default function Navigation(){ 
    return(
    <nav>
     <div>
     <Link href = "/">
     BEEP
     </Link>
     <div>

     <Link
      href="/login"
     >
        Login
     </Link>     
     </div>







     </div>
    </nav>
    );
}