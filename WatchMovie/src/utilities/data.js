export const returnImage = val => {
  return `https://image.tmdb.org/t/p/w1280${val}`;
};
export const renderVote = (itemDataTotal, dataTotalDetail) => {
  const dataFind = (dataTotalDetail ?? []).find(
    item => item?.id == itemDataTotal?.item_count,
  );
  if (dataFind?.id) {
    return dataFind;
  } else return {};
};
export const getDataTotal = (dataTotal, dataTotalDetail) => {
  var dataTotalReal = [];
  dataTotal.map(item => {
    var count = 0;
    dataTotalDetail.map(item1 => {
      if (item1?.id == item?.item_count) count = count + 1;
    });
    if (count > 0) dataTotalReal.push(item);
  });
  return dataTotalReal;
};

const background = '#15141F';
const white = '#FFFFFF';
const firstColor = '#FF8F71';
const endColor = '#EF2D1A';
const gray = '#BCBCBC';
const starColor = '#F3BE00';
export {background, firstColor, endColor, white, gray, starColor};
