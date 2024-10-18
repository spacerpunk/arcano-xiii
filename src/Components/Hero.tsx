import {DESCRIPTION} from '../Constants/index';
import profilePic from '../assets/Images/profile.png';

const Hero = () => {
    return (
        <div className="border-b border-neutral-100 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text8xl">ARCANO XIII</h1>
                        <span className="bg-gradient-to-r from-slate-700 via-slate-400 to-red-500 bg-clip-text text-2xl tracking-tight text-transparent">
                            an Interactive Album
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{DESCRIPTION}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                    <img className="rounded-lg" src={profilePic} alt="Nico" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;