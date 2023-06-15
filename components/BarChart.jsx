import React ,{useState,useEffect} from  'react' 
// import ChartJS from 'chart.js'

import {Bar} from 'react-chartjs-2'
import{
    Chart as ChartJS ,
    CategoryScale ,
    LinearScale ,
    BarElement ,
    Title ,
    Tooltip ,
    Legend ,

} from 'chart.js' ;


   ChartJS.register(
    CategoryScale ,
    LinearScale ,
    BarElement ,
    Title ,
    Tooltip ,
    Legend 

);

const BarChart = () => {
    const [chartData ,setChartData] = useState({
        datasets:[] ,
    });

    const [chartOptions, setChartOptions] =useState({})

    useEffect(()=>{
        setChartData({
            labels:['Mon','Tues','Wed','Thu','Fri','Sat','Sun'],
            datasets:[
                {
                    label: 'Sales $',
                    data:[18125,19875,14789,24785,12547,36541,15000],
                    borderColor: 'rgb(55,112,155)' ,
                    backgroundColor: 'rgb(55,112,155,0.6)' ,
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                  position: 'top' ,
                },
                title:{
                    display:true,
                    text:'DailyRevenue'
                }
            },
            maintainAspectRatio :false ,
            responsive:true
        })

    } , [])
    

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white  '> 
           <Bar data={chartData} options={chartOptions} /> 
        </div>
        
        
    
    
    
    
    
    
    
    </>
  )
}

export default BarChart