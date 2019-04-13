let {PythonShell} = require('python-shell')

function runPy(a1, a2){
    return new Promise(async function(resolve, reject){
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: '/Users/hardik.shakya/Desktop/Web-Examples/Python/try/try1',
            args: [a1, a2]
        };

        await PythonShell.run('try1.py', options, function (err, results) {
           
            if (err) throw err;
            // console.log('results: ');
            for(let i of results){
                console.log("Traffic : ",parseInt(i) )//, "---->", typeof i)
            }
            resolve(results[1])
        });
    })
}
// function runMain(){
//     return new Promise(async function(resolve, reject){
//         let r =  await runPy()
//         // console.log((r))
//     })
// }
// runPy('Merseyside', 'Knowsley', '2000-06-08', 1)
runPy('Knowsley', 1)