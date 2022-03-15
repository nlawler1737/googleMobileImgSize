console.log(document.location.host + document.location.pathname)
if (document.location.host + document.location.pathname == 'www.google.com/search') {
try {
document.addEventListener('click',function() {
    let img = document.querySelector('#yDmH0d > div.A8mJGd > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id > div > img')
    if (!img) return
    let oldText = document.querySelector('#imgSizeText')
    if (oldText) {oldText.remove()}
    setTimeout(addText,500)
    function addText(){
    let imgParent = img.parentElement.parentElement.parentElement
    let imgSize = document.createElement('div')
    imgSize.innerText = `${img.naturalWidth} x ${img.naturalHeight}`
    imgSize.id = 'imgSizeText'
    imgSize.style = 'position: absolute;background-color: rgba(0,0,0,0.35);left: 0;bottom: 0;color: white;z-index: 10;padding: 4px;'
    imgParent.appendChild(imgSize)
        console.log('done')
}
})
} catch(e){console.log(e)}
}
