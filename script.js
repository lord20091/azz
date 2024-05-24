let btn = document.getElementById(`buttn`);

let ism = document.getElementById(`ism`);

let familiya = document.getElementById(`familiya`);

let div = document.getElementById(`ota`);

div.style.display = `flex`
div.style.flexDirection = `column`
div.style.justifyContent = `center`
div.style.alignItems = `center`
div.style.marginTop = `200px`
div.style.gap = `20px`
ism.style.border = `gray`
familiya.style.border = `1px solid gray`
ism.style.border = `1px solid gray`
familiya.style.fontSize = `20px`
familiya.style.padding = `20px`
ism.style.padding = `20px`
familiya.style.borderRadius = `20px`
ism.style.borderRadius = `20px`
ism.style.fontSize = `20px`
btn.style.padding = `20px`
btn.style.width = `300px`
btn.style.fontSize = `20px`
btn.style.borderRadius = `20px`
btn.style.border = `none`
btn.style.backgroundColor = `orange`
btn.style.color = `white`





btn.addEventListener(`click`, ()=>{
    if (ism.value == 123456 && familiya.value == 78900) {
        alert(`Siz Spacega kirdingiz`)
    } else {
        alert(`ERROR`)
    }
});