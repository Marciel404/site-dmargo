import valLogin from "@/scripts/valLogin"

export default function () {
  return (
    <main className="bg-pink-200" onLoad={valLogin()!}>
        <div className="content">
        </div>
    </main>
  )
}
