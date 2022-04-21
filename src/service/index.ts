import DB from './modles/initSequelize';
export const sequelize = DB.sequelize;
export const Op = DB.Op;
import category from './modles/category';
export const Category = category;
export const syncTable = () => {
  category.sync({ force: false });
};
