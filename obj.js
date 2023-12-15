const nestObj= [
    {
        class:"FSD",
        // start an index[0]----
        student:[
            {
                name:"deva",
                stack:["html","css",{
                    js: ["react","anguler"]
                }]
            },
            // index[1]----
            {
                name:"deva",
                stack:["html","css",{
                    js: ["react","anguler"]
                }]
            },
          ]
        //   end an array 
    }
]

console.log(nestObj[0].student[0].stack[2].js[0]);
console.log(nestObj[0].student[1].stack[2].js[1]);