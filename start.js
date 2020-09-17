    const loadScript = scr => {
            const script = document.createElement('script')
            script.src = scr
            document.head.appendChild(script)
    }

function createmap()
{
    loadScript("libraries/p5.min.js")
    loadScript("init.js")  
}