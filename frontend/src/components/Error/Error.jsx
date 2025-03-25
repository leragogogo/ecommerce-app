import './Error.css';
import errorImg from "../../assets/error/error.png";

// component showing when the error occurred
export const Error = () => {
    return (
        <div className='error'>
            <p className='error-text'>
                Error. Check your Internet connection.
            </p>
            <img src={errorImg} className='error-img' />
        </div>
    )
}