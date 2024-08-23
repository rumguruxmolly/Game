document.querySelector('.background').addEventListener('mousemove', coors)
document.querySelector('.container').addEventListener('mousemove', coors)
sentivity = 15
function coors(e) {
    x = e.clientX
    y = e.clientY
    document.querySelector('.background').style.backgroundPosition = `${x/sentivity}px ${y/sentivity}px`
}
function transition() {
    if (document.getElementById("username").onfocus) {
        alert('nigga')
    } else {
        alert('test')
    }
    
}
function untransition() {
    document.getElementById('username').placeholder="Username"
    document.getElementById('username').legend=""
    document.querySelector('.legend').style.opacity=0
}document.querySelector('.background').addEventListener('mousemove', coors)
document.querySelector('.container').addEventListener('mousemove', coors)
sentivity = 15
function coors(e) {
    x = e.clientX
    y = e.clientY
    document.querySelector('.background').style.backgroundPosition = `${x/sentivity}px ${y/sentivity}px`
}
document.getElementById("username").addEventListener('click', transition1)
function transition1() {
    document.getElementById("username").placeholder=""
    document.querySelector('.legend').style.opacity=1
}
document.getElementById("password").addEventListener('click', transition2)
function transition2() {
    document.getElementById("password").placeholder=""
    document.querySelector('#legendPass').style.opacity=1
    if (document.getElementById("")) {
        
    }

}
function untransition1() {
    document.getElementById("username").placeholder="Username"
    document.querySelector('.legend').style.opacity=0
}
function untransition2() {
    document.getElementById("password").placeholder="Password"
    document.querySelector('#legendPass').style.opacity=0
}
document.getElementById('username').addEventListener('input',Errs)
document.getElementById('password').addEventListener('input',Errs)

function Errs() {
    if (document.getElementById("username").value!=="" && document.getElementById('password').value!==""){
        document.getElementById('btn').disabled = false
        document.getElementById('btn').style.backgroundColor="rgb(228, 208, 241)"
    }
    else{
        document.getElementById('btn').disabled = true
    }

}