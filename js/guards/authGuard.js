(() => {
    const user = localStorage.getItem("login_success") 

    if(!user){
        window.location.href = "index.html"
    }
}

)()