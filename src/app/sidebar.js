import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 
                        flex flex-col bg-gray-900 text-white shadow-lg">

            <SideBarIcon icon={<FaFire size="28"/>} />
            <SideBarIcon icon={<BsPlus size="32"/>} />
            <SideBarIcon icon={<BsFillLightningFill size="20"/>} />
            <SideBarIcon icon={<FaPoo size="20"/>} />
        </div>
    );
};

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);
export default SideBar;
