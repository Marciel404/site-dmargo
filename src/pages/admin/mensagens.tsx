import Header from '@/components/header'

export default function () {
  console.log(process.env.MONGOKET)!
  return (
    <main className="bg-pink-200 h-screen w-screen">
        <Header></Header>
        <div className="content">
        </div>
    </main>
  )
}
