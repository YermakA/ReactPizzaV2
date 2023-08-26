import qs from "qs";

export function getQsAttr(currentType, categoryId) {
  const queryString = qs.stringify({
    sortProperty: currentType,
    categoryId,
  });

  return "?" + queryString;
}

export function getObjFromQs(str): qs.ParsedQs {
  return qs.parse(str.substr(1));
}
