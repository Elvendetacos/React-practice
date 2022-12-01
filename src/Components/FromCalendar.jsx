import '../assets/Style/Calendar.css'
import Header from './Header';
import { useEffect } from 'react';

function FromCalendar() {

    useEffect(()=>{
        
    })

    return ( 
        <>
        <Header></Header>
        <div className='div-calendar'>
            <div className='month-div'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='days-div'>
                <p name="1">1</p>
                <p name="2">2</p>
                <p name="3">3</p>
                <p name="4">4</p>
                <p name="5">5</p>
                <p name="6">6</p>
                <p name="7">7</p>
                <p name="8">8</p>
                <p name="9">9</p>
                <p name="10">10</p>
                <p name="11">11</p>
                <p name="12">12</p>
                <p name="13">13</p>
                <p name="14">14</p>
                <p name="15">15</p>
                <p name="16">16</p>
                <p name="17">17</p>
                <p name="18">18</p>
                <p name="19">19</p>
                <p name="20">20</p>
                <p name="21">21</p>
                <p name="22">22</p>
                <p name="23">23</p>
                <p name="24">24</p>
                <p name="25">25</p>
                <p name="26">26</p>
                <p name="27">27</p>
                <p name="28">28</p>
                <p name="29">29</p>
                <p name="30">30</p>
            </div>
        </div>
        </>
     );
}

export default FromCalendar;