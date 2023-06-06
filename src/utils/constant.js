export const API_BASE_URL = "https://api.thedogapi.com/v1";
export const API_KEY =
  "live_hCptoUyz99WjowKpERUcYdc5CvGFVymz26JNIdkTBwEAQgjv9FPMkrYIpetqzPDE";
export const ASC = "asc";
export const DESC = "desc";
export const SORT_ITEMS = [
  {
    key: "name",
    value: "Name",
  },
  {
    key: "height",
    value: "Height",
  },
  {
    key: "life_span",
    value: "Lifespan",
  },
];
export const GET_SORTED_VALUES = (items, sort) => {
  const { key, order } = sort;
  const getRangeStart = (value) => parseInt(value.split(" - ")[0], 10);
  return items.sort((a, b) => {
    let aVal = a[key];
    let bVal = b[key];
    if (key === "height") {
      aVal = getRangeStart(a[key].metric);
      bVal = getRangeStart(b[key].metric);
    }
    if (key === "life_span") {
      aVal = getRangeStart(a[key]);
      bVal = getRangeStart(b[key]);
    }
    if (aVal < bVal) {
      return order === ASC ? -1 : 1;
    }
    if (aVal > bVal) {
      return order === ASC ? 1 : -1;
    }
    return 0;
  });
};
