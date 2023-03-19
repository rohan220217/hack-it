export default function (enumString) {
  if (!enumString) return "";
  let label = enumString;
  // if underscore
  if (enumString.includes("_")) {
    label = enumString.replaceAll("_", " ");
    label = label.charAt(0).toUpperCase() + label.slice(1);
  }
  // if &
  else if (enumString.includes("&")) {
    let labelArray = enumString.split("&");
    label =
      labelArray[0].charAt(0).toUpperCase() +
      " & " +
      labelArray[1].charAt(0).toUpperCase();
  } else {
    label = label.charAt(0).toUpperCase() + label.slice(1);
  }
  return label;
}
