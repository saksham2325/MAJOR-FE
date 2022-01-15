const durationConverter = (duration) => {
    duration = duration.split(":");
    const durationInSeconds = +duration[0] * 60 * 60 + +duration[1] * 60 + +duration[2];
    return durationInSeconds;
};

export default durationConverter;
