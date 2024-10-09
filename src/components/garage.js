import Car from './car';
import Apple from './apple';
function Garage(){
    
    // const brand ="Ferrari";
    // const color ="Red";
    
    const carInfo = { brand: 'Ferrari', color:'red'};
    
    const carCheck = carInfo.brand !== undefined && carInfo.color !== undefined;

    const carDetails =[
        { brand: 'Ferrari', color:'red'},
        { brand: 'Porche', color:'white'},
        { brand: 'Lamborgini', color:'black'}
    ]
    return(
        <>
            <h3>Who is inside me ?</h3>
            
            {/* <Car brand={brand} color={color}/> */}
            {carCheck? <Car carInfo={carInfo}/> : null}
            <Apple/>

            <ul>
                {carDetails.map((carInfo)=> <li><Car carInfo={carInfo}/></li> )    }
            </ul>
        </>  
    )
}

export default Garage;