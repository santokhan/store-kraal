export const compare = (formData: any = [], item: string = "") => {
  let list = formData;
  return list.length > 0 && list.includes(item) ? true : false;
};

/**
 * For multiple form form data handling
 * Replace value for single input
 */
export function setDataSingle(value: string | number, formData: any = [], id: string | number = "") {
  formData[id] = value;
}

/**
 * For multiple form form data handling
 * Add or remove items from array for multiple input
 */
export function setData(value: string | number, formData: any = []) {
  if (formData.length > 0) {
    // if items exist, remove them
    // doesn't exist, add them
    let list = formData;
    if (list.includes(value)) {
      list = list.splice(list.indexOf(value), 1);
    } else {
      list = list.push(value);
    }
    return list;
  }
}

/**
 * check after push data to array
 */
export const disabled = (list = []) => (list.length > 0 ? false : true);
