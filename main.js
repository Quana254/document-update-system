const form = document.querySelector("form"),
fileInput =form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});

fileInput.onchange = ({target}) =>{
    let file = target.files[0]; //getting file and [0] this means if user has selected multiple files then get the first one only
    if(file){//if file is selected
        let fileName = file.name;//getting selected file name
        if(fileName.length >= 12){//if file name is greater or equal to 12 the then it split the name and add ...
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 12) + "... ." + splitName[1];
        }
        uploadFile(fileName); //calling uploadFile with passing file name as an argument
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest(); // creating new xml obj(ajax)
    xhr.open("POST","./php/upload.php");//sending post request to the specified url/file
    xhr.upload.addEventListener("progress",({loaded, total}) =>{
        let fileLoaded = Math.floor((loaded / total)* 100); //getting percentage of loaded file size
        let fileTotal = Math.floor(total / 1000);//getting file size in KB from bytes
        let fileSize;
        (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
        let progressHTML = '<li class="row">'
                                '<i class="fas fa-file-alt"></i>'
                                    '<div class="content">'
                                        '<div class="details">'
                                            '<span class="name">${name} .uploading</span>'
                                            '<span class="percent">${fileLoaded}%</span>' 
                                        '</div>'
                                        '<div class="progress-bar">'
                                        '<div class="progress" style="width: ${fileloaded}%"></div>'
                                        '</div>'
                                    '</div>'
                            '</li>'

        progressArea.innerHTML = progressHTML;

        let uploadedHTML = '<li class="row">'
                                '<div class="content">'
                                    '<i class="fas fa-file-alt"></i>'
                                    '<div class="details">'
                                        '<span class="name">${name} . uploaded</span>'
                                        '<span class="size">${fileTotal}</span>'
                                    '</div>' 
                                '</div>'
                                '<i class="fas fa-check"></i>'
                            '</li>';
        uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    });
    let formData = new formData(form);//formdata is an object to easily send form data
    xhr.send(formData);//sending form data to php
}