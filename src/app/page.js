import ButtonBlue from "@/components/buttons/button_blue";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col p-4 bg-green-500  items-center h-screen justify-center '>

     
        <h1 className='text-4xl  p-4 text-black '>Welcome To NCS</h1>
    
       <ButtonBlue text="check our events" href="/events" />

    <ButtonBlue text="Check Our members" href="/members" />

    </div>
  );
}


