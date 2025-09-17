//your JS code here. If required.
const squares = document.querySelectorAll(".square")

        squares.forEach((square, index) => {
            square.addEventListener("mouseover", () => {
                squares.forEach((s, i) => {
                    if (i !== index) {
                        s.style.backgroundColor = "#6F4E37"; // Coffee
                    }
                });
            })

            square.addEventListener("mouseout", () => {
                squares.forEach(s => {

                    s.style.backgroundColor = "#E6E6FA"; // Lavender
                }
                )
            })
        })