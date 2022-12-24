import DividerImageMobile from "../images/pattern-divider-mobile.svg" 
import DividerImageDesktop from "../images/pattern-divider-desktop.svg" 

function Divider(){
    return (
        <div className="flex items-center justify-center">
            <hr className="bg-[#4F5D74]"/>
            <picture>
                <source srcSet={DividerImageMobile}
                        media="(min-width: 1440px)"></source>
                <img src={DividerImageDesktop} alt="" />
            </picture>
            <hr className="bg-[#4F5D74]"/>
        </div>
    );
}

export default Divider;