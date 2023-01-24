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
      <head/>
      <body className="border-cyan-300 place-content-center content-center bg-amber-200">
          <div className="fixed top-10 left-[46%] grid place-content-center pla">
          <span className="shadow-lg shadow-amber-600/50 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-amber-500 relative inline-block text-center">
            <span className="font-mono relative text-white text-2xl font-bold font-serif"><h1>Todo Application</h1></span>
          </span>
          </div>
        <br/>
        {children}
      </body>
    </html>
  )
}
