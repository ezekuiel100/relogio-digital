
let divHoras = document.querySelector(".divHoras")
let divMinutos = document.querySelector(".divMinutos")
let divSegundos = document.querySelector(".divSegundos")


        setInterval(mostrarHoras, 1000)

        function mostrarHoras() {
            let data = new Date()
            let horas = data.getHours().toString().padStart(2, "0")
            let minutos = data.getMinutes().toString().padStart(2, "0")
            let segundos = data.getSeconds().toString().padStart(2, "0")

            divHoras.innerHTML = horas
            divMinutos.innerHTML = minutos
            divSegundos.innerHTML = segundos

        }

        mostrarHoras()

        console.log("aaaaaa")