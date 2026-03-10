const menuBtn = document.getElementById("menuBtn")
const sidebar = document.querySelector(".sidebar")
        const searchInput = document.getElementById("searchInput")
        const suggestions = document.getElementById("suggestions")

        const suggestionList = [
            "coding tutorial",
            "coding music",
            "javascript projects",
            "react tutorial",
            "web development",
            "ai tools",
            "gaming highlights",
            "movie trailers",
            "funny videos",
            "vlogs",
            "technology reviews",
            "fitness routines",
            "cooking recipes",
            "travel vlogs",
            "music videos",
            "comedy sketches",
            "educational content",
            "news updates",
            "sports highlights",
            "fashion hauls",
            "beauty tutorials",
            
        ]

        searchInput.addEventListener("input", () => {

            const value = searchInput.value.toLowerCase()

            suggestions.innerHTML = ""

            if (value === "") {
                suggestions.style.display = "none"
                return
            }

            const filtered = suggestionList.filter(s =>
                s.includes(value)
            )

            filtered.forEach(item => {

                const div = document.createElement("div")

                div.textContent = item

                div.onclick = () => {
                    searchInput.value = item
                    suggestions.style.display = "none"
                }

                suggestions.appendChild(div)

            })

            suggestions.style.display = filtered.length ? "flex" : "none"

        })

        document.addEventListener("click", e => {

            if (!e.target.closest(".search")) {
                suggestions.style.display = "none"
            }

        })

        /* SIDEBAR TOGGLE */

      menuBtn.addEventListener("click", () => {

if(window.innerWidth <= 768){
sidebar.classList.toggle("open")
}else{
sidebar.classList.toggle("collapsed")
}

})
        
        /* VIDEO HOVER PREVIEW */

      const frames = document.querySelectorAll(".video-frame")

frames.forEach(frame => {

frame.addEventListener("mouseenter", () => {

frame.contentWindow.postMessage(
'{"event":"command","func":"playVideo","args":""}',
'*'
)

})

frame.addEventListener("mouseleave", () => {

frame.contentWindow.postMessage(
'{"event":"command","func":"pauseVideo","args":""}',
'*'
)

})

})
        /* NAVBAR SCROLL EFFECT */

const header = document.querySelector(".ytheader")

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

})
    