// function postData() {
//     $.ajax({
//         type: "POST",
//         url: "ajaxpy.py",
//         data: { param: 'data to process' },
//         success: callbackFunc
//     });
// }

// function callbackFunc(response) {
//     // do something with the response
//     console.log(response);
// }

// postData('data to process');

function runPyScript(){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/ajaxpy.py",
        async: false,
        data: { param: 'data to process' }
    });

    console.log(jqXHR.responseText);//return jqXHR.responseText;
}

// do something with the response
// response= runPyScript('data to process');
// console.log(response);