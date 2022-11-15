import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../images/logo.png';
import Pop_up from '../Components/Pop_up';
import CarouselBox from '../Components/CarouselBox';

import fon from '../images/head.jpg';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';

export default class Home extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            *{
              position: relative;
            }
            .name_logo{
              display: flex;
              justify-content: space-around;
              align-content: center;
              margin-bottom: 50px;
              color: var(--p);
            }
            .name{
              font-size: 125px;
              font-weight: 900;
              font-style: italic;
              color: rgb(199, 0, 0);
              text-shadow: 5px 5px 0px rgb(247, 161, 2);
              text-decoration: underline;
              padding-bottom: 50px;
            }
            .Wiaq{
              font-size: 25px; 
              padding-left: 30px;
            }
            main{
              padding-right: 20%;
              padding-left: 20%;
              padding-top: 50px;
              padding-bottom: 50px;
              background-color: rgb(250, 250, 250);
            }
            .future_games{
              min-height: 600px;
              width: 100%;
              height: 100%;
            }
            .f_games{
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100px;
              text-align: center;
              font-size: 50px;
              font-weight: 700;
              color: rgb(199, 0, 0);
              text-shadow: 3px 3px 0px rgb(247, 161, 2);
              margin-bottom: 50px;
            }
            .games_all{
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            .games{
              height: 300px;
              width: 200px;
              transition: 1s;
              box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
              z-index:9;
              box-shadow: 10px 10px 0px rgb(247, 161, 2), -10px -10px 0px rgb(199, 0, 0);
            }
            .games:active{
              transform: scale(2.0);
              overflow: hidden;
                z-index:9;
            }
            .game{
              width: 100%;
              height:100%;
            }
            .buttons{
              display: flex;
              justify-content: space-around;
              margin-top: 60px;
              z-index: -99999999;
            }
            .log_in{
              padding: 0 20px 0 20px;
              border-radius: 25px;
              border: none;
              position: relative;
              background: black;
              color: white;
              height: 8%;
              font-size: 15px;
              font-weight: 900;
              cursor: pointer;
              height: 50px;
              transition: 0.5s;
            }
            .log_in:hover{
              background: rgb(247, 161, 2);
                color: black;
            }

            .planets:active .planet{
              transform: scale(0.9);
          }
          
          .planet{
              padding: 10px;
              transition: 1s;
              margin: 0;
              width: 170px;
          }
          
          .planet:active{
              transform: scale(2.0)!important;
              left: 100px;
              top: 100px;
          }
          
          .planet .sun{
              width: 400px;
          }
          
          .sun{
              position: absolute;
              left: 300px;
              top: 220px;
          }
          
          .sun:active{
              left: 320px;
              top: 220px;
          }
      
          .pic1{
              width: 190px;
              height: 140px;
          }
          
          .earth{
              position: absolute;
              left: 590px;
              top: 120px;
          }
          
          .earth:active{
              left: 320px;
              top: 220px;
          }
      
          .pic2{
              width: 200px;
              height: 140px;
          }
          
          .mars{
              position: absolute;
              left: 590px;
              top: 330px;
          }
          
          .mars:active{
              left: 320px;
              top: 220px;
          }
      
          .pic3{
              width: 210px;
              height: 140px;
          }
          
          .jupyter{
              position: absolute;
              left: 30px;
              top: 120px;
          }
          
          .jupyter:active{
              left: 320px;
              top: 220px;
          }
      
          .pic4{
              width: 180px;
              height: 150px;
          }
          
          .saturn{
              position: absolute;
              left: 30px;
              top: 350px;
          }
          
          .saturn:active{
              left: 320px;
              top: 220px;
          }
      
          .pic5{
              width: 220px;
              height: 120px;
          }
          .cbox{
            width: 300px;
            display: inline-block;
          }
          .planets{
            position: relative;
            height: 600px;
            width: 100%;
          }
          .chasto{
            width: 200px;
            margin: 0;
            padding: 0;
        }
        .chasto h1{
            color: #ffa412;
            background: -webkit-linear-gradient(90deg,#454545,#212121);
            margin: 10px;
        }
    
        .chasto1{
            position: absolute;
            left: 270px;
            font-size: 30px;
            border: solid orange;
            width: 320px;
        }
    
        .txt{
            position: absolute;
            display: none;
            transition: 1s;
            color: #fff;
        }
    
        .sun:active .suntxt{
            display: block;
            left: 40px;
        }
    
        .earth:active .earthtxt{
            display: block;
            left: 20px;
        }
    
        .mars:active .marstxt{
            display: block;
            left: 30px;
        }
    
        .jupyter:active .jupytertxt{
            display: block;
            left: 20px;
        }
    
        .saturn:active .saturntxt{
            display: block;
            left: 217px;
        }
    
        .txt h1{
            font-size: 15px;
            color: #fff;
        }

        .headblock{
          display: flex;
          justify-content: center;
        }
        
        .glvniz{
          width: 1500px;
          display: flex;
          margin-left: 225px;
        }

        .txthome{
          margin-left: 50px;
          width: 500px;
          font-size: 5px;
        }

        .bigblock{
          width: 300px;
          margin-left: 250px;
        }
    
          `}
        </style>


        <Container className='main'>
          <div className="headblock">
            <div className="planets" style={{ backgroundImage: `url(${fon})` , backgroundRepeat: 'no-repeat', width:'65%'}}>
              <div className="chasto">
                <h1 className="chasto1">Recommended Cars</h1>
              </div>
              <div className="planet sun">
                <div className="txt suntxt">
                  <h1>TOYOTA CAMRY</h1>
                </div>
                <img src={p1} alt="" className="pic1" />
              </div>
              <div className="planet earth">
                <div className="txt earthtxt">
                  <h1>BMW X5</h1>
                </div>
                <img src={p2} alt="" className="pic2" />
              </div>
              <div className="planet mars">
                <div className="txt marstxt">
                  <h1>CHEVROLET CAMARO</h1>
                </div>
                <img src={p3} alt="" className="pic3" />
              </div>
              <div className="planet jupyter">
                <div className="txt jupytertxt">
                  <h1>TESLA MODEL S</h1>
                </div>
                <img src={p4} alt="" className="pic4" />
              </div>
              <div className="planet saturn">
                <div className="txt saturntxt">
                  <h1>Mercedes-Benz AMG GT</h1>
                </div>
                <img src={p5} alt="" className="pic5" />
              </div>
            </div>
          </div>
          <div className="bigblock">
            <div className="arrow">
              <h4>OUR CARS</h4>
            </div>
          </div>

          <div className="glvniz">
          <div className="cbox">
            <CarouselBox />
          </div>

          <div className="txthome">
            <h2>"R&R cars" is a company that does not just rent cars for rent Almaty and Astana. In organizing our business, we took into account the many years of experience of the world-famous procurers and adapted it to the specifics, needs and mentality of our clients. We have turned rental of cars in Kazakhstan from expensive services into accessible and understandable for all people.</h2>
          </div>
          </div>
        </Container>
      </>
    )
  }
}
