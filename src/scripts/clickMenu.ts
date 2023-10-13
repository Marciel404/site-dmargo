export default function (){
    const sidebar = document.getElementsByClassName("sidebarmobile") as any

    if (sidebar[0].style.display == ""){
        sidebar[0].style.display = "block"
    } else if (sidebar[0].style.display == "block") {
        sidebar[0].style.display = ""
    }
}