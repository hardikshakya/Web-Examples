let {PythonShell} = require('python-shell');

// function runPy(a1, a2){    
    return new Promise(async function(resolve, reject){
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: '/Users/hardik.shakya/Desktop/Web-Examples/Python/try/try1',
            args: ['Knowsley', 2]
        };

        await PythonShell.run('try1.py', options, function (err, results) {           
            if (err) throw err;
            for(let i of results){
                console.log("Traffic : ",int(i) )
                // getC(int(i))
            }
            resolve(results[1])
        });
    })
// console.log("hauhuh");

// }
 
//  function getC(){
//     google.charts.load('current', {'packages':['bar']});
//     google.charts.setOnLoadCallback(drawStuff);
//  }
  

//   function drawStuff() {
//     runPy('Knowsley', 1);
//     var data = new google.visualization.arrayToDataTable([
//       ['Hours', 'Average Number'],
//       ["King's pawn (e4)", 20],
//       ["Queen's pawn (d4)", 31],
//       ["Knight to King 3 (Nf3)", 12],
//       ["Queen's bishop pawn (c4)", 10],
//       ['Other', 3]
//     ]);

//     var options = {
//       title: 'Chess opening moves',
//       width: 900,
//       legend: { position: 'none' },
//     //   chart: { title: 'Chess opening moves',
//     //            subtitle: 'popularity by percentage' },
//       bars: 'vertical', 
//       axes: {
//         x: {
//           0: { side: 'top', label: 'Hour(0-23)'}, 
//         },
//         y: {
//           0: { side: 'left', label: 'Average Number'}, 
//         }
//       },
//       bar: { groupWidth: "90%" }
//     };

//     var chart = new google.charts.Bar(document.getElementById('top_x_div'));
//     chart.draw(data, options);
//   };