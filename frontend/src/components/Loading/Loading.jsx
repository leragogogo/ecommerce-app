import './Loading.css';

// component showing during loading data
export const Loading = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
}