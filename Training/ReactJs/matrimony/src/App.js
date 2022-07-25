import './style.css'
import logo from './images/logo.svg'

export default function App() {
    return <>
        <div className='home_row1'>
            <div className='home_row1_col1'>
                <div className='home_row1_col1_img'>
                    <img src={logo} />
                </div>
                <div className='home_row1_col1_text'>
                <label className='home_row1_col1_text_label1'>ChristianMatrimony.com</label>
                <label className='home_row1_col1_text_label2'>From Matrimony.com Group</label>
                </div>
            </div>
            <div className='home_row1_col2'> 
                    <label>Already a member?</label> 
                <div className='home_row1_col2_button'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </>
}