import './loader.css'

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="container mx-[10%]">
                <div className="carousel">
                    <div className="love"></div>
                    <div className="love"></div>
                    <div className="love"></div>
                    <div className="love"></div>
                    <div className="love"></div>
                    <div className="love"></div>
                    <div className="love"></div>
                </div>
            </div>
            <div className="container mx-[10%]">
                <div className="carousel">
                    <div className="death"></div>
                    <div className="death"></div>
                    <div className="death"></div>
                    <div className="death"></div>
                    <div className="death"></div>
                    <div className="death"></div>
                    <div className="death"></div>
                </div>
            </div>
            <div className="container mx-[10%]">
                <div className="carousel">
                    <div className="robots"></div>
                    <div className="robots"></div>
                    <div className="robots"></div>
                    <div className="robots"></div>
                    <div className="robots"></div>
                    <div className="robots"></div>
                    <div className="robots"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
