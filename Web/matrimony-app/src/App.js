import './style.css'
import logo from './logo_icon.svg'

export default function App() {
    return <>


        <div className='home_row1'>


            <div className='home_row1_column1'>
                <div className='home_row1_column1_logo'>
                    <img src={logo}></img>
                </div>


                <div className='home_raw1_column1_text'>
                    <label className='home_raw1_column1_label1'>ChristianMatrimony.com</label>
                    <label className='home_raw1_column1_label2'>From Matrimony.com Group</label>
                </div>

            </div>

            <div className='home_row1_column2' >
                <label>Already a Member ?</label>
                <div className='home_row1_column2_button'>
                    <button>Log In</button>

                </div>
            </div>

        </div>









    </>
}