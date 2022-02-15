import React, { Fragment, useEffect, useState } from 'react';
import { dateFormat } from '../../genUtils';
import { Container, Row, Col } from 'react-bootstrap'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './style.css'
//grab ip address info to check local weather
const Checkweather = () => {
    const [weatherData, setWeatherData] = useState();
    const [currentConditions, setCurrentConditions] = useState();
    const [multidayForcast, setMultidayForcast] = useState();
    const [searchedLocation, setSearchedLoction] = useState();
    useEffect(() => {
        console.log('in effect')
        fetch('/getweather')
            .then(res => res.json())
            .then(data => {
                console.log(data.locations['Rogers,AR,USA'].currentConditions.temp)
                setCurrentConditions(data.locations['Rogers,AR,USA'].currentConditions)
                setMultidayForcast(data.locations['Rogers,AR,USA'].values)
                setWeatherData(data);
            });
    }, []);

    const PreviousWeatherTempGraph = () => {

        return (<> weather graph </>);

    }

    const searcheWeather = (location) => {
        fetch('/getweather')
            .then(res => res.json())
            .then(data => {
                console.log(data.locations[location].currentConditions.temp)
                setCurrentConditions(data.locations[location].currentConditions)
                setMultidayForcast(data.locations[location].values)
                setWeatherData(data);
            });
    }

    return (
        <>
            <h1>
                Check Weather
            </h1>
            <div className='searchBar'>
                <input
                    onChange={setSearchedLoction}
                    placeholder='ex: Rogers,AR,USA'
                ></input>
                <button
                    onClick={() => {
                        searcheWeather(searchedLocation)
                    }}
                >Search Weather</button>
            </div>
            {weatherData ?
                <div className="weathercheckDashboard">
                    <Container>
                        <Row>
                            <Col xs={4}>
                                <h1>Currntly {currentConditions?.temp}*</h1>
                            </Col>
                            <Row>
                                <Carousel
                                    plugins={
                                        [
                                            'infinite',
                                            'arrows',
                                            {
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    numberOfSlides: 5
                                                }
                                            }
                                        ]
                                    }

                                    breakpoints={{
                                        500: {
                                            plugins: [
                                                {
                                                    resolve: slidesToShowPlugin,
                                                    options: {
                                                        numberOfSlides: 3
                                                    }
                                                },
                                            ]
                                        },
                                        900: {
                                            plugins: [
                                                {
                                                    resolve: slidesToShowPlugin,
                                                    options: {
                                                        numberOfSlides: 4
                                                    }
                                                },
                                            ]
                                        }
                                    }}
                                >
                                    {multidayForcast.map((fiveDay, i) => (

                                        <div className='forcastBox'>
                                            <p style={{ textDecoration: 'underline' }}> {dateFormat(fiveDay.datetimeStr)} </p>
                                            <div>Max temp {fiveDay.maxt}</div>
                                            <div>Min temp {fiveDay.mint}</div>
                                        </div>
                                    ))
                                    }
                                </Carousel>
                            </Row>
                        </Row>

                    </Container>
                </div>
                : <></>}
        </>
    )
}

export default Checkweather;