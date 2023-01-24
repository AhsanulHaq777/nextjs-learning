import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen grid place-content-center pla">
        {/* <div className= "bg-teal-500 w-100 h-100"> */}
          {/* <h1 className="text-3xl text-center font-bold text-amber-300">Todo Application</h1> */}
          <span className="shadow-lg shadow-amber-600/50 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-500 relative inline-block text-center">
            <span className="relative text-white text-2xl font-bold">Todo Application</span>
          </span>
        {/* </div> */}
        <br/>
        {children}
      </body>
    </html>
  )
}
