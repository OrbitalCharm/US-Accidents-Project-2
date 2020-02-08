

var data = d3.csv("assets/data/data.csv")
dropdown = d3.select("#selDataset")
demo = d3.select("#sample-metadata")

data.then(function (data){
   
    var county=[]

    
    data.forEach(data=>county.push(data.County))

    var county=_.uniq(county)
    function init(data){
        var AccidentCount=[]
        var time=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        data.filter(data=>data.County==="Alameda").forEach(data=>AccidentCount.push(data.Accidents))
        var text = data[0].County
        var values = AccidentCount
        
        var PrintData=[text,eval(values.join('+'))]
        demo.append("h6").text(`${PrintData[1]} Accidents occurred in ${PrintData[0]} in 2019`)
        
        var bar = {
            type: "bar",
            x: values.reverse(),
            y: time.reverse(),
            orientation: "h",
            
        }
    
        var layout = {
            margin: {
    
                t: 20,
                b: 20,
    
            },
            width: 400,
            height: 500,
           
        };
    
        var data = [bar]
        Plotly.newPlot("bar", data, layout)
    
        var bubble = {
            x: time,
            y: values,
            mode: "markers",
            text:text,
            marker: {
                color: time,
                size: values*0.5,
                autocolorscale: false,
                colorscale: 'Earth'
            }
    
    
        }
    
        var layout = {
            showlegend: false,
            
            xaxis: {
                title: {
                    text: "Time",
                }
            },
    
            margin: {
    
                t: 20,
    
            }
        }
        data = [bubble]
        Plotly.newPlot("bubble", data, layout)
    
    }
    init(data)
    function dropdownManue(){
        county.forEach(counties=>dropdown.append("option").text(counties))
        }
        dropdownManue()
})






   
 d3.selectAll("#selDataset").on("change", optionChanged)

 function  optionChanged() {
     data.then((data)=>{
        demo.html("")
        var time=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        var values=[]
        var text=[]
        var counties = dropdown.property("value")
       
        
        var updata = data.filter(data =>data.County === counties)
     
        updata.forEach(data=>values.push(data.Accidents))
        text=counties
        var PrintData=[text,eval(values.join('+'))]
        demo.append("h6").text(`${PrintData[1]} Accidents occurred in ${PrintData[0]} in 2019`)
        var x = []
        var y = []
        
        
        x = values.reverse(),
        y = time.reverse(),
     

        Plotly.restyle("bar", "x", [x]);
        Plotly.restyle("bar", "y", [y]);
        
        

        x=time
        
        y=values
        
        Plotly.restyle("bubble", "x", [x] );
        Plotly.restyle("bubble", "y", [y] );
       
        Plotly.restyle("bubble","text",[text]);

    })

    }
    





