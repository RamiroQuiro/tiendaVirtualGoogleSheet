

export async function getItems() {
  const items = await fetchApi();
  items.forEach((element) => {
    const reg = /(dl=0)/g
    element.image_url=element.image_url.replace(reg, "raw=1");

  });
  return items;
}

export async function getSliceItems() {
  const items = await fetchApi();
  items.forEach((element) => {
    const reg = /(dl=0)/g
    element.image_url=element.image_url.replace(reg, "raw=1");

  });
  return items.slice(0, 22);
}
