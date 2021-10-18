export const imagesURLS = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_960_720.jpg",
  "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/10/05/14/39/sunset-3726030_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/06/23/17/46/desert-2435404_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/09/23/13/26/moss-6649862_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/08/17/14/48/sea-6553205_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/08/24/15/38/sand-6570980_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_960_720.jpg"

];

export const randomImageURL = ()=>{
  const length = imagesURLS.length;
  const index = Math.floor(Math.random() * length);
  return imagesURLS[index];
}