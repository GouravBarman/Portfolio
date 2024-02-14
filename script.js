
// ---------------------- this is for about section -----------------


let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");

let opentab=(tabname)=>{
 for(link of tablinks){
    link.classList.remove('active-link');
 }

 for(cont of tabcontents){
    cont.classList.remove('active-tab');
 }

 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}


// ----------------- this is for side menu bar -----------


let sidemenu=document.getElementById("sidemenu");

let openmenu=()=>{
    sidemenu.style.right=0;
}

let closemenu=()=>{
    sidemenu.style.right="-200px";
}


// ------------------- this is for contact info ----------------


const scriptURL = 'https://script.google.com/macros/s/AKfycbxIODwvsf925skpvTjiGY0F4KZu8QgfIVGpgQHVCvimHgDAsUy06IPEMJe0BWHFfLql/exec';
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then( response => {
msg.innerHTML="Message sent Successfully";
setTimeout(()=>{msg.innerHTML=""},3000);
form.reset();
})
.catch(error => console.error('Error!', error.message))
})
