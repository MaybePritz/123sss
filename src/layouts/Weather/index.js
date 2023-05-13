import { useRouter } from 'next/router'
import classNames from "classnames";
import { useAppController, AppTheme } from "@/context";

const WeatherLayout = ({ children }) => {
    //useTheme
    AppTheme();
    const [controller, dispatch] = useAppController();
    const { sidebarStatus } = controller;
    const { pathname } = useRouter();


    return (
        <div className={classNames(
            'ease-soft-in-out',
            { 'xl:ml-68.5': sidebarStatus },
            'relative',
            'h-full',
            'max-h-screen',
            'rounded-xl',
            'transition-all',
            'duration-200',
            'overflow-x-hidden')}>
            {children}
        </div>
    );
}

export default WeatherLayout;
