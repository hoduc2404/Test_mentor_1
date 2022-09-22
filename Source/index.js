const arrCategory = [
  { id: "Fol1", name: "Folder 1", idParent: null },
  { id: "Fol2", name: "Folder 2", idParent: null },
  { id: "Fol3", name: "Folder 3", idParent: null },
  { id: "Fol4", name: "Folder 4", idParent: null },
  { id: "Fol1_1", name: "Folder 1.1", idParent: "Fol1" },
  { id: "Fol1_2", name: "Folder 1.2", idParent: "Fol1" },
  { id: "Fol1_3", name: "Folder 1.3", idParent: "Fol1" },
  { id: "Fol2_1", name: "Folder 2.1", idParent: "Fol2" },
  { id: "Fol2_2", name: "Folder 2.2", idParent: "Fol2" },
  { id: "Fol2_3", name: "Folder 2.3", idParent: "Fol2" },
  { id: "Fol3_1", name: "Folder 3.1", idParent: "Fol3" },
  { id: "Fol3_2", name: "Folder 3.2", idParent: "Fol3" },
  { id: "Fol3_3", name: "Folder 3.3", idParent: "Fol3" },
  { id: "Fol1_1_1", name: "Folder 1.1.1", idParent: "Fol1_1" },
  { id: "Fol1_1_2", name: "Folder 1.1.2", idParent: "Fol1_1" },
  { id: "Fol1_2_2", name: "Folder 1.2.2", idParent: "Fol1_2" },
  { id: "Fol1_2_3", name: "Folder 1.2.3", idParent: "Fol1_2" },
  { id: "Fol2_2_2", name: "Folder 2.2.2", idParent: "Fol2_2" },
  { id: "Fol3_2_2", name: "Folder 3.2.2", idParent: "Fol1_1" },
  { id: "Fol3_2_2_3", name: "Folder 3.2.2.3", idParent: "Fol3_2_2" },
  { id: "Fol3_2_2_3_1", name: "Folder 3.2.2.3.1", idParent: "Fol3_2_2_3" },
  {
    id: "Fol3_2_2_3_1_1",
    name: "Folder 3.2.2.3.1.1",
    idParent: "Fol3_2_2_3_1",
  },
  {
    id: "Fol3_2_2_3_1_1_1",
    name: "Folder 3.2.2.3.1.1.1",
    idParent: "Fol3_2_2_3_1_1",
  },
  
];
result();
function addchild(arr, parent) {
  return arr
    .filter((item) => item.idParent === parent)
    .map((items) => ({
      ...items,
      children: addchild(arr, items.id),
    }));
}
function result() {
  const result = arrCategory.reduce((acc, item) => {
    if (item.idParent === null) return [...acc, item];
    const parent = acc.find((i) => i.id === item?.idParent);
    if (parent) parent.children = [...addchild(arrCategory, parent.id)];

    return acc;
  }, []);
  var noiDungTable = "";

  result.forEach((element) => {
    noiDungTable += `
        <li style="list-style: none">
        <i class="fa fa-folder"> ${element.name}</i>
        ${renderChildren(element.children)}
      </li>
          `;
  });

  document.getElementById("results_Ul").innerHTML = noiDungTable;
}
function renderChildren(array) {
   var noiDungTable = "";
   if (array) {
      array.forEach((element) => {
        noiDungTable += `
          <ul>
          <li style="list-style: none">
          <i class="fa fa-folder"> ${element.name}</i>
          ${renderChildren(element.children)}
        </li>
          </ul>
            `;
      });
   }
  return noiDungTable;
}
