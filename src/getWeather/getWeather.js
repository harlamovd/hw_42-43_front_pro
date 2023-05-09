async function getWeather(cityId) {
    const appKey ='29b5f691572a738893f60486ac924769';
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const getUrl = new URL(url);
    getUrl.searchParams.append('id', cityId);
    getUrl.searchParams.append('appid', appKey);
    getUrl.searchParams.append('units', 'metric');
    try {
        const request = await fetch(getUrl);
        if (!request.ok) {
            throw new Error(request.status);
        }
        const data = await request.json();
        return data;
    }
    catch (e) {
        return e
    }
}
export default getWeather
