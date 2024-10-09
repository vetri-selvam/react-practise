function Car(props) {

    const {carInfo} = props;

    const {brand, color} = carInfo;


    
    const text = `Hi, I am a ${color} ${brand} car. I am inside you.`;
    return (
        <>
            <h2>{text}</h2>
        </>
        
    )
}

export default Car;