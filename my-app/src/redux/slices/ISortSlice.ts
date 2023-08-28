interface ISortSlice {
  sortTypeArr: {
    name: string;
    typeProperty: string;
  }[];
  currentType: { name: string; typeProperty: string };
}

export default ISortSlice;
