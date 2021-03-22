const getDateTime = (value, type) => {
  const dateTime = new Date(value);

  switch (type) {
    case "hour":
      return dateTime.getHours().toLocaleString();

    case "minute":
      return dateTime.getMinutes().toLocaleString();

    case "second":
      return dateTime.getSeconds().toLocaleString();

    case "date":
      return dateTime.getDate().toLocaleString();

    case "month":
      return dateTime.getMonth().toLocaleString();

    case "year":
      return dateTime.getFullYear();

    default:
      return dateTime.toLocaleString();
  }
};

export const dateFormatter = (dates) => {
  if (dates !== undefined) {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];

    let getDate = getDateTime(dates, "date");
    const date = getDate.length === 1 ? `0${getDate}` : getDate;

    let month = getDateTime(dates, "month");
    month = monthName[month];

    let year = getDateTime(dates, "year");

    return `${date} ${month.substr(0, 3)} ${year}`;
  } else {
    console.error("Params is undefined");
  }
};

export const timeFormatter = (time) => {
  if (time !== undefined) {
    let getHour = getDateTime(time, "hour");
    const hour = getHour.length === 1 ? `0${getHour}` : getHour;

    let getMinute = getDateTime(time, "minute");
    const minute = getMinute.length === 1 ? `0${getMinute}` : getMinute;

    let getSecond = getDateTime(time, "second");
    const second = getSecond.length === 1 ? `0${getSecond}` : getSecond;

    return `${hour}:${minute}:${second}`;
  } else {
    console.error("Params is undefined");
  }
};
