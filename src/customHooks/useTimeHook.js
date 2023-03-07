const useTimeHook= function(){
    let currentTime = new Date();

    const updateTime = function(date) {
        currentTime = new Date(date)
        // return currentTime;
    }

    return [currentTime, updateTime]
}

export default useTimeHook;