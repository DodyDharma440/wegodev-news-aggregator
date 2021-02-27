export const dateFormatter = (dates) => {
  if (dates !== undefined) {
    let date = dates.substring(8, 10);
    let month = dates.substring(5, 7);
    let year = dates.substring(0, 4);

    switch (month) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "Desember";
        break;
      default:
        month = undefined;
        break;
    }

    const DMY = `${date} ${month.substr(0, 3)} ${year}`;

    return DMY;
  } else {
    console.error("Params is undefined");
  }
};

export const timeFormatter = (time) => {
  if (time !== undefined) {
    const HMS = time.substring(11, 19);
    return HMS;
  } else {
    console.error("Params is undefined");
  }
};
