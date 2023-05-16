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



function Home({ data }) {
    const router = useRouter();

    if(router.query.hasOwnProperty("location")) {
    return (
        <WeatherLayout>
            <Navbar data={data}/>
            <div className='mx-1 md:mx-0 lg:mx-5'>
                <div class="flex flex-wrap">
                    <SMForecast title={'Четверг'} date={Math.floor(new Date().getTime() / 1000.0) + 24 * 60 * 60} place={router.query.location}/>
                    <SMForecast title={'Пятница'} date={Math.floor(new Date().getTime() / 1000.0) + 2 * 24 * 60 * 60} place={router.query.location}/>
                    <SMForecast title={'Суббота'} date={Math.floor(new Date().getTime() / 1000.0) + 3 * 24 * 60 * 60} place={router.query.location}/>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap mt-6 md:mt-0">
                    <Forecast data={data}/>
                    <div class="w-full max-w-full px-3 mt-6 ml-auto xl:flex-0 shrink-0 md:mt-0 xl:w-8/12">
                        <div class="flex flex-wrap mt-6 -mx-3">
                            <ForecastDetail width={'4/12'} title={'По ощущению'} subtitle={'Градусы цельсия'} info={'feelslike_c'} data={data}/>
                            <ForecastDetail width={'4/12'} title={'Влажность'} subtitle={'Проценты'} info={'humidity'} data={data}/>
                            <ForecastDetail width={'4/12'} title={'Скорость ветра'} subtitle={'м/c'} info={'wind_kph'} data={data}/>
                        </div>
                        <div class="flex flex-wrap mt-0 md:mt-6 -mx-3">
                            <ForecastDetail width={"1/2"} title={'Восход солнца'} data={data}/>
                            <ForecastDetail width={'1/2'} title={'Заход солнца'} data={data}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap mt-6 md:mt-0">
                    <WeekForecast data={data}/>
                    <TempWeek data={data}/>
                </div>
                <Footer />
            </div>
            <FixedPlugin />
        </WeatherLayout>
    );
}};

export async function getServerSideProps(context) {
    const { req, res } = context;

    if(typeof context.params.location === 'undefined'){
        res.setHeader("location", "/");
        res.statusCode = 404;
        res.end();
        return;
    }

    if (req.headers.host) {
        const res = await fetch('http://' + req.headers.host + `/api/weather`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({ location: context.params.location}),
        });
        const data = await res.json();

        return { props: { data } };
    }
}

export default Home;

