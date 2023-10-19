import Header from "@/components/header"
import valLogin from "@/scripts/valLogin"

export default function () {
  return (
    <main className="" onLoad={valLogin()!}>
        <div className="content">
        </div>
    </main>
  )
}
