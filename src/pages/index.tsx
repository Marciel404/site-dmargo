import Header from '@/components/header'

export default function () {
  console.log(process.env.MONGOKET)!
  return (
    <main className="h-full w-screen">
        <Header></Header>
        <div className="content">
        </div>
    </main>
  )
}
