import { useRouter } from 'next/router';
//Main components
import WeatherLayout from "@/layouts/Weather";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import FixedPlugin from "@/components/main/fixed_plugin";

//Import weather Components
import SMForecast from "@/components/forecasts/forecast_sm";
import Forecast from "@/components/forecasts/forecast";
import ForecastDetail from "@/components/forecasts/forecast_detail";
import WeekForecast from "@/components/forecasts/forecast_week";
import TempWeek from "@/components/forecasts/temp_week";



export default function Weather() {
    const router = useRouter();
    console.log(router.query);
    if(router.query.hasOwnProperty("location")) {
    return (
        <WeatherLayout>
            <Navbar place={router.query.location}/>
            <div className='mx-1 md:mx-0 lg:mx-5'>
                <div class="flex flex-wrap">
                    <SMForecast title={'Четверг'} date={Math.floor(new Date().getTime() / 1000.0) + 24 * 60 * 60} place={router.query.location}/>
                    <SMForecast title={'Пятница'} date={Math.floor(new Date().getTime() / 1000.0) + 2 * 24 * 60 * 60} place={router.query.location}/>
                    <SMForecast title={'Суббота'} date={Math.floor(new Date().getTime() / 1000.0) + 3 * 24 * 60 * 60}place={router.query.location}/>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap mt-6 md:mt-0">
                    <Forecast place={router.query.location}/>
                    <div class="w-full max-w-full px-3 mt-6 ml-auto xl:flex-0 shrink-0 md:mt-0 xl:w-8/12">
                        <div class="flex flex-wrap mt-6 -mx-3">
                            <ForecastDetail width={'4/12'} title={'По ощущению'} subtitle={'Градусы цельсия'} info={'feelslike_c'} place={router.query.location}/>
                            <ForecastDetail width={'4/12'} title={'Влажность'} subtitle={'Проценты'} info={'humidity'} place={router.query.location}/>
                            <ForecastDetail width={'4/12'} title={'Скорость ветра'} subtitle={'м/c'} info={'wind_kph'} place={router.query.location}/>
                        </div>
                        <div class="flex flex-wrap mt-0 md:mt-6 -mx-3">
                            <ForecastDetail width={"1/2"} title={'Восход солнца'} place={router.query.location}/>
                            <ForecastDetail width={'1/2'} title={'Заход солнца'} place={router.query.location}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap mt-6 md:mt-0">
                    <WeekForecast place={router.query.location}/>
                    <TempWeek place={router.query.location}/>
                </div>
                <Footer />
            </div>
            <FixedPlugin />
        </WeatherLayout>
    );
}
};

