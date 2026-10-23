import Link from "next/link";

export default function ButtonBlue({ text, href }) {
    return (
        <div className='bg-blue-500 p-4 rounded-lg mt-4'>
        <Link href={href}>{text}</Link>
      </div>
    )
    }