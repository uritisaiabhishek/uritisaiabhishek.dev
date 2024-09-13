import data from '../data.json';

const getCategoryName = (catID) => {
    if (catID === 'All') return 'All';
    let category = data.projectCategories.find(x => x.id === catID);
    return category ? category.name : 'Unknown';
};

export default getCategoryName