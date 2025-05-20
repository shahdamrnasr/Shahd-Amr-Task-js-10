    var btns = document.querySelectorAll(".btn")
    var shoppingCart = document.getElementById("shoppingCart")
    var totalButton = document.getElementById("Totel")
    var priceDisplay = document.getElementById("price")
    var inputSearch = document.getElementById("search")
    var productCard = document.querySelectorAll(".product-card")
    var notFound = document.getElementById("notFound")
    var totalPrice = 0

    inputSearch.addEventListener('input' , () => {
    var inputValue = inputSearch.value.toLowerCase()

        var anyVaisbale = false

        productCard.forEach((item) => {
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.style.display = "list-item"
            anyVaisbale = true
        }else{
            item.style.display = "none"
        }
    }) 

        notFound.style.display = anyVaisbale ?  "none" : "block"
    })

    btns.forEach(function (item) {
        item.onclick = function () {
            shoppingCart.innerHTML += item.getAttribute("product") + " - " + item.getAttribute("price") + " LE<br>"
            totalPrice += +(item.getAttribute("price"))
            document.getElementById("Clear").style.display = 'block'
            document.getElementById("Totel").style.display = 'block'
            document.getElementById("shoppingCart").scrollIntoView({
                behavior: 'smooth'
            })

            emptyMessage.style.display = 'none';
            if(totalPrice > 5000){
                    alert("You Got Discount 30%")
                    totalPrice -= 500
                }
        }
    })

    totalButton.onclick = function () {
        priceDisplay.innerHTML = "Total Price: " + totalPrice + " LE"
    }

    document.getElementById("Clear").onclick = function () {
        shoppingCart.innerHTML = ''
        totalPrice = 0
        priceDisplay.innerHTML = ''
        emptyMessage.style.display = 'block';
        this.style.display = 'none'
        totalButton.style.display = 'none'
    }