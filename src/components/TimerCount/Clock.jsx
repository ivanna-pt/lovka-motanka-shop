import React, {useState, useEffect} from "react";

const Clock = () =>{

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const countDown = () => {

        const destinationDate = new Date('Feb 20, 2023').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = destinationDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(difference % (1000 * 60) / 1000)

            if(destinationDate < 0) clearInterval(interval.current)
            else{
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    })

    return (
        <div className='d-flex align-items-center gap-3'>
            <div className='d-flex align-items-center gap-3'>
                <div>
                    <h2 className='fs-2 mb-2 text-center'>{days}</h2>
                    <h5 className='fs-6'>Days</h5>
                </div>
                <span className='fs-2'>:</span>
            </div>

            <div className='d-flex align-items-center gap-3'>
                <div>
                    <h2 className='fs-2 mb-2 text-center'>{hours}</h2>
                    <h5 className='fs-6'>Hours</h5>
                </div>
                <span className='fs-2'>:</span>
            </div>

            <div className='d-flex align-items-center gap-3'>
                <div>
                    <h2 className='fs-2 mb-2 text-center'>{minutes}</h2>
                    <h5 className='fs-6'>Minutes</h5>
                </div>
                <span className='fs-2'>:</span>
            </div>

            <div className='d-flex align-items-center gap-3'>
                <div>
                    <h2 className='fs-2 mb-2 text-center'>{seconds}</h2>
                    <h5 className='fs-6'>Seconds</h5>
                </div>

            </div>

        </div>
    )
}

export default Clock;