import ButtonBlue from "@/components/buttons/button_blue";

export default function RootLayout({ children }) {
    return (
        <div>

           {children}

       <ButtonBlue text='go back' href='/' />

     </div>

    )
}