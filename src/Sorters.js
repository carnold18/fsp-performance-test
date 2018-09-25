class Sorters {
    static byName(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    }

    static byPoints(a, b) {
        if (a.ind_points < b.ind_points) {
          return -1;
        }
        if (a.ind_points > b.ind_points) {
          return 1;
        }
        return 0
    }

}
export default Sorters;
