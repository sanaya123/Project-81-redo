canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="blue"

ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth = 5
ctx.arc(250,210,50,0,2*Math.PI)
ctx.stroke()

color="yellow"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth = 5
ctx.arc(300,250,50,0,2*Math.PI)
ctx.stroke()

color="black"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth = 5
ctx.arc(360,210,50,0,2*Math.PI)
ctx.stroke()

color="green"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth = 5
ctx.arc(430,250,50,0,2*Math.PI)
ctx.stroke()

color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth = 5
ctx.arc(480,210,50,0,2*Math.PI)
ctx.stroke()